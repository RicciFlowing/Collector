# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create([{name: "geometry", subject: 'Math'},
                              {name: "arithmetic", subject: 'Math'},
                              {name: "analysis", subject: 'Math'},
                              {name: "stochastic" , subject: 'Math'},
                              {name:"alebgra", subject: 'Math'}])
