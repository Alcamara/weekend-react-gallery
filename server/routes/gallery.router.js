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


// POST Route Begins
router.post('/',(req,res)=>{
    const path = req.body.path;
    const description = req.body.description
    console.log('Got data', path, description);

    const insertQuery = `
    INSERT INTO "gallery" (path,description,likes)
    Values ($1,$2,0);
    `

    const queryParams = [
        path,
        description
    ]

    pool.query(insertQuery,queryParams)
        .then(()=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            console.log('insetQuery failed',err);
        })
})//END POST Route


//DELETE Route Begins
router.delete('/:id',(req,res)=>{
    const id = req.params.id
    console.log(id);

    const deleteQuery = `
    DELETE FROM gallery
    WHERE "id" = $1;
    `

    const queryParam = [
        id
    ]

    pool.query(deleteQuery,queryParam)
        .then(()=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            console.log('Delete query failed', err);
            res.sendStatus(500)
        })
})// END DELETE Route 


module.exports = router;