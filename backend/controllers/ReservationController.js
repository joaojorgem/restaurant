const Reservation = require('../models/Reservation');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.get('/', async (_request, response) => {
    try {
        const reservations = await Reservation.where().populate('user')
        return response.json(reservations);
    } catch (error) {
        return response.status(500).json({ error: 'An error has occurred!.' });
    }
})

router.get('/show', async (request, response) => {
    try {
        const { id } = request.params;
        const reservation = await Reservation.findById(id).populate('user');
        if (!reservation._id) {
            return response.status(404).json({ error: 'Is empty.' });
        }

        return response.json(reservation);

    } catch (error) {
        return response.status(500).json({ error: 'An error has occurred!.' });
    }
})

router.post('/create', async (request, response) => {

    let newUser = request.body.user;
    const userExists = await User.where('email', user.email);

    if (!userExists) {
        newUser = await User.Create(user);
    } else {
        newUser = userExists;
    }

    const { date, hour, adults, childrens, specialNotes } = request.body;

    const reservation = await Reservation.create({
        date,
        hour,
        adults: Number(adults),
        childrens: Number(childrens),
        specialNotes,
        user: newUser._id
    });

    return response.json({ id: reservation._id, user: newUser });
});

router.put('/:id', async (request, response) => {
    const { id } = request.params;
    const reservation = await Reservation.findById(id);
    if (!reservation._id) {
        return response.status(401).json({ error: 'An error has occurred!.' });
    }

    const reservationUpdated = await reservation.findByIdAndUpdate(id, response.body);

    return response.json(reservationUpdated);
});

router.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const reservation = await Reservation.findById(id);

    if (reservation.user != user_id) {
        return response.status(401).json({ error: 'An error has occurred!.' });
    }

    await reservation.findByIdAndDelete(id);

    return response.status(204).send('ok');
});



module.exports = app => app.use('/reservation', router);