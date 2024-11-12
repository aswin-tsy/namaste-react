const resList = [
    {
      id: "res1",
      title: "Food Circles",
      image:
        "http://res.cloudinary.com/simpleview/image/upload/v1438123960/clients/grandrapids/file_bcf11a47-7451-464f-8c4d-c9d3e85e9146.png",
      minCharge: "5.00 LE",
      rating: "2",
      deliveryTime: "30-35 mins",
      location: "Calicut",
      titlMC: "foodCirclesMenuCat",
      url_menucat:
        "https://gist.github.com/omar94hamza/95723a43bb97f21567c99948c31dc7aa/raw/d09556d7f9591c9ac36d499a48c82d0012589a03/foodcirclesmenucat.json",
      type: ["Chicken", "Meat"],
    },
    {
      id: "res2",
      title: "KFC",
      image:
        "http://vignette1.wikia.nocookie.net/ridiculoushist/images/b/b8/KFC_logo.png",
      minCharge: "10.00 LE",
      rating: "8",
      titlMC: "kfc",
      deliveryTime: "30-35 mins",
      url_menucat:
        "https://gist.github.com/omar94hamza/5915e318a11a40f7a70e440804431e45/raw/9dfee086fc5f6734c7306c17e5fa97e3683df2d8/kfc.json",
      type: ["Fast Food", "Chicken", "Sandwiches"],
      location: "Thalassery",
    },
    {
      id: "res3",
      title: "Dinware Dines Out",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPfTg03JhRWcevqxGetAFrWzfaBghse54Zg&s",
      minCharge: "6.00 LE",
      rating: "6",
      deliveryTime: "30-35 mins",
      titlMC: "dinwaredinesout",
      url_menucat:
        "https://gist.github.com/omar94hamza/00f1be36672b4b12cc3125cc5fb4dc90/raw/c6e6c32835d60ab030258b9c051e73a42aea58b6/dinwaredinesout.json",
      type: ["Burgers", "Fast Food"],
      location: "Mankave",
    },
    {
      id: "res4",
      title: "Windmills-rest&cater-vector",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgt0OK7rT0qjqhn9BoMnjF8265aezTyM51oA&s",
      minCharge: "Free",
      rating: "3",
      deliveryTime: "30-35 mins",
      titlMC: "windmills",
      url_menucat:
        "https://gist.github.com/omar94hamza/e01f92414a77f555fcd45255a961a9ba/raw/17ddf8c4e84e5d854084d06e5d8bfeec9bffa79d/windmills.json",
      type: ["Grilled", "Oriental", "Sandwiches"],
      location: "Trivandrum",
    },
    {
      id: "res5",
      title: "McDonald's",
      image:
        "https://www.deputy.com/uploads/2018/08/Screen-Shot-2018-08-08-at-11.26.53-AM.png",
      minCharge: "7.00 LE",
      rating: "8",
      deliveryTime: "30-35 mins",
      titlMC: "burgerking",
      url_menucat:
        "https://gist.github.com/omar94hamza/c1e7a0220547235c515e3b073bb4e7ff/raw/e122811cf463a8f47d90a5aa7407cc3998dbb21b/burgerking.json",
      type: ["Burgers", "Fast Food"],
      location: "Chennai",
    },
    {
      id: "res6",
      title: "Restaurant",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "16.00 LE",
      rating: "9",
      titlMC: "restaurant",
      deliveryTime: "30-35 mins",
      url_menucat:
        "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
      type: ["Pizza"],
      location: "Trichy",
    },
    {
      id: "res7",
      title: "Food Circles",
      image:
        "http://res.cloudinary.com/simpleview/image/upload/v1438123960/clients/grandrapids/file_bcf11a47-7451-464f-8c4d-c9d3e85e9146.png",
      minCharge: "5.00 LE",
      rating: "2",
      deliveryTime: "30-35 mins",
      titlMC: "foodCirclesMenuCat",
      url_menucat:
        "https://gist.github.com/omar94hamza/95723a43bb97f21567c99948c31dc7aa/raw/d09556d7f9591c9ac36d499a48c82d0012589a03/foodcirclesmenucat.json",
      type: ["Chicken", "Meat"],
      location: "Trichy",
    },
    {
      id: "res8",
      title: "KFC",
      image:
        "http://vignette1.wikia.nocookie.net/ridiculoushist/images/b/b8/KFC_logo.png",
      minCharge: "10.00 LE",
      rating: "8",
      titlMC: "kfc",
      deliveryTime: "30-35 mins",
      url_menucat:
        "https://gist.github.com/omar94hamza/5915e318a11a40f7a70e440804431e45/raw/9dfee086fc5f6734c7306c17e5fa97e3683df2d8/kfc.json",
      type: ["Fast Food", "Chicken", "Sandwiches"],
      location: "Trissur",
    },
    {
      id: "res9",
      title: "Dinware Dines Out",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPfTg03JhRWcevqxGetAFrWzfaBghse54Zg&s",
      minCharge: "6.00 LE",
      rating: "6",
      deliveryTime: "30-35 mins",
      titlMC: "dinwaredinesout",
      url_menucat:
        "https://gist.github.com/omar94hamza/00f1be36672b4b12cc3125cc5fb4dc90/raw/c6e6c32835d60ab030258b9c051e73a42aea58b6/dinwaredinesout.json",
      type: ["Burgers", "Fast Food"],
      location: "Trichy",
    },
    {
      id: "res10",
      title: "Windmills-rest&cater-vector",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgt0OK7rT0qjqhn9BoMnjF8265aezTyM51oA&s",
      minCharge: "Free",
      rating: "3",
      deliveryTime: "30-35 mins",
      titlMC: "windmills",
      url_menucat:
        "https://gist.github.com/omar94hamza/e01f92414a77f555fcd45255a961a9ba/raw/17ddf8c4e84e5d854084d06e5d8bfeec9bffa79d/windmills.json",
      type: ["Grilled", "Oriental", "Sandwiches"],
      location: "Calicut",
    },
    {
      id: "res11",
      title: "McDonald's",
      image:
        "https://www.deputy.com/uploads/2018/08/Screen-Shot-2018-08-08-at-11.26.53-AM.png",
      minCharge: "7.00 LE",
      rating: "8",
      deliveryTime: "30-35 mins",
      titlMC: "burgerking",
      url_menucat:
        "https://gist.github.com/omar94hamza/c1e7a0220547235c515e3b073bb4e7ff/raw/e122811cf463a8f47d90a5aa7407cc3998dbb21b/burgerking.json",
      type: ["Burgers", "Fast Food"],
      location: "Trichy",
    },
    {
      id: "res12",
      title: "Restaurant",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "16.00 LE",
      rating: "9",
      titlMC: "restaurant",
      deliveryTime: "30-35 mins",
      url_menucat:
        "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
      type: ["Pizza"],
      location: "Alaphy",
    },
  ];

  export default resList;