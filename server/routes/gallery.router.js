const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }

    const updateLikeNum = `
    UPDATE gallery
    SET likes = likes + 1
    WHERE id = $1;
    `
    const queryParam = [
        galleryId,
    ]

    pool.query(updateLikeNum,queryParam)
        .then(()=>{
            res.sendStatus(200);
        }).catch((err)=>{
            console.log('Put request failed',err);
        })

    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const query = `
    SELECT * FROM "gallery"
    ORDER BY likes DESC;
    `

    pool.query(query)
        .then((result)=>{
            res.send(result.rows)
        }).catch((err)=>{
            console.log("Get request failed", err);
            res.sendStatus(500);
        })
    

}); // END GET Route

module.exports = router;