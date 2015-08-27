# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
math = Schoolsubject.create name: "Mathematics"
science =  Schoolsubject.create name: "Science"
categories = Category.create([{name: "geometry", schoolsubject: math},
                              {name: "arithmetic", schoolsubject: math},
                              {name: "analysis", schoolsubject: math},
                              {name: "stochastic" , schoolsubject: math},
                              {name:"alebgra", schoolsubject: math}])
