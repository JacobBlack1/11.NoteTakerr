const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        const data = fs.readFileSync('../..develop/11.NoteTakerr/db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
    })
    const notes = JSON.parse(data);
    res.json(notes);
  })
}