const {User} = require('../schemas/userSchema')
const {Charge} = require('../schemas/chargeSchema')

require('dotenv').config()

var omise = require('omise')({
    'publicKey': process.env.OMISE_PUBLIC_KEY,
    'secretKey': process.env.OMISE_SECRET_KEY,
  });

const cardCreateView = async (req, res) => {
    
    try {
        
        const omiseCard = await omise.customers.update(
            req.user.omise,
            {'card': req.body.token},
            function(error, customer) {
              if(error){
                  console.log(error)
              }
            }
          );

        //   console.log('Omise Card', omiseCard)

        const cards = []

        const omiseCards = await omise.customers.listCards(req.user.omise, function(error, list) {
            if(error){
                console.log(error)
            }
            });

        // console.log('All Cards',omiseCards)
        omiseCards.data.forEach(card => {
            const tempCard = {
                cardID: card.id,
                name: card.name,
                brand: card.brand,
                last_digits: card.last_digits,
                expiration_month: card.expiration_month,
                expiration_year: card.expiration_year,
            }
            cards.push(tempCard)
        })

        // console.log(cards)

        const user = await User.findByIdAndUpdate(req.user._id, {cards: cards}, {new: true})

        res.status(200).json(user)



    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

const cardChargeView = async (req, res) => {

    console.log('Cart Obj', req.session.cart)
    try {
        


        // Have to multiple whatever your total amount is by 100 because omise calculates everything in cents
       const omiseCharge = await omise.charges.create({
            'amount': req.session.cart.total * 100,
            'currency': 'usd',
            'customer': req.user.omise,
            'card': req.body.cardID,
          }, function(error, charge) {
            if(error) {
                console.log(error)
            }
          });

          console.log(omiseCharge)

          const charge = await Charge.create({user: req.user._id, ...omiseCharge, cart: req.session.cart})

          req.session.chargeID = charge._id
          req.session.omiseChargeID = omiseCharge.id
          req.session.save()

          res.status(201).json(charge)



    } catch (error) {
        
    }



}

const cardDeleteView = async (req, res) => {
    console.log(req.body)

    try {
        
        const omiseDestroy = await omise.customers.destroyCard(
            req.user.omise,
            req.body.omiseCardID,
            function(error, card) {
              if(error) {
                  console.log(error)
              }
            }
          );

        console.log(omiseDestroy)

        const user = await User.findByIdAndUpdate(req.user._id, {$pull: {cards: {_id: req.body.objectID}}}, {new:true})
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {cardCreateView, cardChargeView, cardDeleteView}

