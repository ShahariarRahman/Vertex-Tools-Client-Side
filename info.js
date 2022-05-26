/* 
must:{
    1. website has to be a tools manufacturer{
        1. carpentry/ masonry/ electric/ metalwork or any tool
        2. not e-commerce.
    }
    2. give a meaningfull name of the website.
    3. home page{
        1. navbar{
            1. Home
            2. Blog
            3. My Portfolio
            4. not admin{
                1. Dashboard
            }
            5.logined{
                1. user Name
                2. login/register
            }
            6. side nav{
                1. My Profile
                2. admin{
                    1. Manage All Orders
                    2. Add A Product
                    3. Make Admin
                    4. Manage Products
                }
                2. not admin{
                    1. My Orders
                    2. Add A Review
                }
            } 
        }
        2. banner
        3. tools/parts{
            1. which tools we are making.ex.car parts, freezer parts
            2. number of tools parts will be 3 0r 6.
            3. tool{
                1. tool's name, image, short description, minimum order quantity
                2. available quantity, price (per unit price)
                3. button{
                    1. btn name: purchase/buy now/place order/book now
                    2. btn click{
                        go to purchase page.
                    }
                } 
            }
        }
        4. business summary{
            1. give an icon.
            2. minimus 3 to 4 business details.
            3. ex{
                1.sample picture is given
                2.we served {
                    1. 100+ customers
                    2. 32+ different country's customer. 
                    3. 120M+ Annual revenue
                    4. 33K+ Reviews
                    5. 50+ tools
                }
            }
        }
        5.review{
            1. show reviews which add from dashboard
            2. no limit on the number of reviews or the order of the review.
        }
        6.footer
        7. extra section 1{
            1. make meaningfull and related to the website
            2. not like meaningless hello section
        }
        8. extra meaning section 2{
            1. make meaningfull and related to the website
            2. not like meaningless hello section
        }

    }
    4. purchase page.{
        1. private/protected route{
            1.logined{
                1. go to the page directly.
                2. reload{
                    1. must not back to login page again
                }
            }
            2. not logined{
                1. go to login page.
                2. after login go to derire page
            }
        }
        2.input field {
            1. show user name, email from login.
            2. take address, phone number, etc.
            3. quantity{
                1. default will be minimum quantity. 
                2. user can increase/decrease quantity by input field
                3. user can't reduce quantity more than minimum.
                4. user can't incress quantity more than available.
                5. (minimum> quantity >available){
                    1. display error
                    2. disable the purchase button.
                };
            }
            4. purchase button 
            
        }
    }
    5. dashboard page{
        1. side nav{
            1. My Profile page{
                1. can add/update information
                2. informations are{
                    1. name,email (see but can't change).
                    2. education, location (city/district)
                    3. phone number, LinkedIn profile link, etc.
                }
                3. can add also update those information at database.
            }

            2. admin{
                1. Manage All Orders{
                    1. can see all orderds for all users
                    2. order not paid{
                        1. show unpaid.
                    }
                    3. order paid{
                        1. btn Ship Now
                        2. Ship Now click{
                            1. update status
                            2. status: shipped
                        }
                    }
                }
                2. Add A Product{
                    1. can add product
                    2. product{
                        1. tool's name, short description
                        2. quantity, minimum order quantity, price (per unit price)
                        3. image{
                            1. give uploaded file link at input field.
                            2. or update image as file directly.
                        }
                        4. after product added{
                            1. show product at homepage.
                        }
                    }
                }
                3. Make Admin{
                    1. make admin from all user.
                }
                4. Manage Products{
                    1. btn delete product{
                        1. ask confirmation before deleting.
                        2. must use modal
                        3. After deletion that product not appear on home page
                    }
                }
            }
            3. not admin{
                1. My Orders page{
                    1. not paid{
                        1. pay btn for each order
                        1. cancel/delete btn for each order
                        3. pay click{
                            1. go to payment page.
                        }
                        4. cancel/delete click{
                            1. open a modal for confirmation{
                                1. yes{
                                    1. delete
                                }
                                2. no {
                                    1. don't delete
                                }
                            }
                        }
                    }
                    2. paid{
                        1. must show transaction id.
                    }
                }
                2. Add A Review page{
                    1. field ratings(1 to 5)
                    2. field description (limit 250 is optional)
                    3. review will appear on the home page reviews section.
                }
                3.
            }
        }
    }
    6. payment page{
        1. can pay using credit card
        2. order details{
            1. product name
            2. product quantity.etc.
        }
        3. after payment{
            1. save database{
                1. product id
                2. transcation id
                3. email
                4. status: pending
            }
            2. show transaction id is optional.
        } 

    }
    7. Blogs page{
        1. not protected route at all.\
        2. ans any 5{
            14.1 How will you improve the performance of a React Application?
            14.2 What are the different ways to manage a state in a React application?{
                1.5-7 line
                2.max 10 line.
            }
            14.3 How does prototypical inheritance work in JavaScript?
            14.4 Why you do not set the state directly in React.For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
            14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            14.6 What is a unit test? Why should write unit tests?
        }
    }
    8. My Portfolio page{
        1. name
        2. email address
        3. educational background
        4. list of technologies or skills you have as a web developer.
        5. Add links of three of your best projects (live website links).
    }
    9. meaningful 404 page{
        1. Add a meaningful image on 404 page.
    }
    10.login/Register{
        1. email/ password
        2. one social
        3. logined{
            1.header{
                1. show logout btn and user name
            }
        }
        4. send email verification. but user can use website without email verification.
        5. show login-related errors and password validation-related errors.
    }
    11. login page{
    
    }
    12. Register page{
        1. must user name.
    }
}
*/

/* 
bouns:{
    1. readme.md{
        1. add both the client and server sides
        2. containing {
            1. website name, live site link.
            2. at least five(max 7) bullet points for website features and functionality.
        }
    }
    2. meaningful commit At least{
        client-side: 15 
        server-side: 10
    }
    3. responsive{
        1. desktop and mobile
    }
    4. no lorem ipsum.
    5. clean and organized Code
    6. meaningful and consistent look.
    7. use .env at server and .env.local at client
    8. use .gitignore
    9. have to use jwt
    10. make a jwt{
        1. both sign and registration{
            1. both email-password, social
        }
    }
    11. use at least one react query.
    12. use at least one react hook form
}
*/

/* 
submit:{
    1. Client-side code github repository
    2. Server-side code github repository
    3. Live website link
    4. For our testing purpose, you will need to provide admin credentials (an email address and a password)
    5. [optional] Project and code overview demo video
}
*/
/* 
optional by me:{
    1.  website will be simple and standard looking.
}
*/

/* 
recommended by instruction:{
    1.
}
*/

/* 
optional by instruction:{
    1.
}
*/
