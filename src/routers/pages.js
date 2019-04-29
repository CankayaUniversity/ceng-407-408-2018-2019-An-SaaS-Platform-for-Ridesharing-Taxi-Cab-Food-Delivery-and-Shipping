const express = require('express')
const router = new express.Router()


// mainpage route
router.get('', (req,res) => {
    res.render('index', {
        title: 'API Mainpage',
        description: 'Some description',
        name: 'Onur Ata Saritas'
    })
})

// about route
router.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Onur Ata Saritas'
    })
})

// help route
router.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help Page',
        description: '',
        name: 'Onur Ata Saritas'
    })
})

// docs route
router.get('/docs', (req,res) => {
    res.render('docs', {
        title: 'Documentation',
        description: '',
        name: 'Onur Ata Saritas'
    })
})

// error route
router.get('*', (req, res) => {
    res.render('404', {
        title: 'Sorry! We couldn\'t find that',
        description: 'That page has been removed or no longer exists.',
        name: 'Onur Ata Saritas'

    })
})

module.exports = router