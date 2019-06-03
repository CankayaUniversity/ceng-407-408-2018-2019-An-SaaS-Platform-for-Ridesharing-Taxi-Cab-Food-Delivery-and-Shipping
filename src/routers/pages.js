const express = require('express')
const router = new express.Router()


// mainpage route
router.get('', (req,res) => {
    res.render('index', {
        title: 'Riders App',
        description: 'Riders, An SaaS Platform is a ridesharing platform that assists pedestrians and overall aims to get improve traffic flow in modern cities. This platform is used in daily transportation and commuting environments to increase communication between drivers and passengers to achieve efficient and safe ridesharing activities. By using modern and open source packages, the platform is upgradeable and easy-to-use.',
        name: 'Onur Ata Saritas'
    })
})

// about route
router.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Us',
        description: 'We are a team of developers from Cankaya University.',
        name: 'Onur Ata Saritas'
    })
})

// help route
router.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help Page',
        description: 'You can find useful information here.',
        name: 'Onur Ata Saritas'
    })
})

// docs route
router.get('/docs', (req,res) => {
    res.render('docs', {
        title: 'Documentation',
        description: 'Here you can find the project\'s documentation:',
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