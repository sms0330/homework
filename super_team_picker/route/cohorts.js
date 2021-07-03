const express = require('express')
const router = express.Router();
const knex = require('../db/client')

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) => {
    knex('cohorts')
        .insert({
            name: req.body.name,            
            members: req.body.members,
            logoUrl: req.body.logoUrl
        })
        .returning('*')
        .then((data) => {
            const record = data[0]
            res.redirect(`/cohorts/${record.id}`)
        })
})

router.get('/', (req, res) => {
    knex('cohorts')
        .orderBy('createdAt', 'desc')
        .then((data) => {
            res.render('cohorts', {data: data})
        })
})

router.get('/:id', (req, res) => {
  knex('cohorts')
    .select('*')
    .where({ id: req.params.id })
    .then(data => {
      let teams = [];
      if (req.query.method) {
        quantity = req.query.quantity;
        teamMembers = data[0].members.split(', ') || [];
        let index = 0;
        const getRandomTeamMember = () => {
          index = Math.floor(Math.random() * teamMembers.length);
          thisMember = teamMembers[index];
          teamMembers.splice(index, 1);
          return thisMember;
        };
        
        if (req.query.method === 'numberPerTeam') {
          teamIndex = 0;
          let member;
          const len = teamMembers.length;
          for (let n = 0; n < len; n++) {
            member = getRandomTeamMember();
            if (teams[teamIndex]) {
              if (teams[teamIndex].length >= quantity) {
                teamIndex++;
                teams[teamIndex] = [];
              }
            } else {
              teams[teamIndex] = [];
            }
            teams[teamIndex].push(member);
          }
        }

        if (req.query.method === 'teamCount') {
          teamIndex = 0;
          let member;
          const len = teamMembers.length;
          for (let n = 1; n <= quantity; n++) {
            teams.push([]);
          }
          for (let n = 0; n < len; n++) {
            member = getRandomTeamMember();
            teams[teamIndex].push(member);
            teamIndex = teamIndex === quantity - 1 ? 0 : teamIndex + 1;
          }
        }

        for (let n = 0; n < teams.length; n++) {
          teams[n] = teams[n].join(', ');
        }
      }

      res.render('show', {
        record: data[0], 
        quantity: req.query.quantity,
        method: req.query.method,
        teams: teams,
      });
    });
});

router.delete('/:id', (req,res) => {
  knex('cohorts')
      .where('id', req.params.id)
      .del()
      .then(() => {
          res.redirect('/cohorts')
      })
})

router.get('/:id/edit', (req,res) => {
  knex('cohorts')
      .where('id', req.params.id)
      .first()
      .then((data) => {
          if (data) {
              res.render('edit', {record: data})
          } else {
              res.send('No item found')
          }
      })
})

router.patch('/:id', (req, res) => {
  knex('cohorts')
      .where('id', req.params.id)
      .update({
          name: req.body.name,
          members: req.body.members,
          logoUrl: req.body.logoUrl
      })
      .then(() => {
          res.redirect(`/cohorts/${req.params.id}`)
      })
})


module.exports = router
