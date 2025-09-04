import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -search
 *  -Resturants container
 *    -ResturantCard
 *        - image
 *        - Name of Res, Star Rating, cusine, delery tie
 *    -
 * Footer
 *  -copy rigths
 *  -links
 *  -Address
 *  -Contact
 */
const resList = [
  {
    type: "restaurant",
    info: {
      resId: 21364497,
      name: "Shiso - Modern Asian Kitchen and Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/21364497/e4ceb3ac24eaa5da2e2e44e53ed88b46_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/21364497/e4ceb3ac24eaa5da2e2e44e53ed88b46_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.9",
        rating_text: "4.9",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "68",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.9",
            reviewCount: "68",
            reviewTextSmall: "68 Reviews",
            subtext: "68 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Majitha Road, Amritsar",
        address:
          "Shashtri nagar, Majitha Verka By pass, Majitha Road, Amritsar, Punjab",
        localityUrl: "amritsar/majitha-road-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/modern-indian/",
          name: "Modern Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/amritsar/shiso-modern-asian-kitchen-and-bar-majitha-road/info",
      clickActionDeeplink: "",
    },
    distance: "5.5 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9332791","bzone":"0","campaign_id":"18309049","category_id":"1","location_type":"city","location_id":"22","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21364497","isNewAd":"34","ad_position":"10","slider_position":"10","slider_sequence":"10","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":26,\\"boosted_rank\\":10,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.038824\\",\\"cost_for_two_ctr\\":\\"0.097546\\",\\"distance\\":\\"5.294987678527832\\",\\"organic_ctr\\":\\"0.028105\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"165\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.669633309186243\\",\\"cost_for_two_ctr\\":\\"0.6743867702773706\\",\\"cost_per_unit\\":\\"0.9634525660964232\\",\\"distance\\":\\"0.28313203747934756\\",\\"organic_ctr\\":\\"1\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.02756892230576441\\"},\\"search_id\\":\\"a272ada8-3725-4964-a4c0-d788a1e58e17\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.4371796645741784}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a272ada8-3725-4964-a4c0-d788a1e58e17","location_type":"delivery_cell","location_id":"4114430487827578880","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21364497","element_type":"listing","rank":10,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20903383,
      name: "Casa Artesa",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/20903383/135854ee27ecde8f02728cf1907c19a6_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/20903383/135854ee27ecde8f02728cf1907c19a6_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20903383/e6a59ab9e6cdeabe62d25308d06aa489_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "132",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "127",
            reviewTextSmall: "127 Reviews",
            subtext: "127 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "5",
            reviewTextSmall: "5 Reviews",
            subtext: "5 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,800 for two",
      },
      cfo: {
        text: "₹750 for one",
      },
      locality: {
        name: "Amritsar Cantonment, Amritsar",
        address:
          "Plot 11, Palm Groove, Club Lane, Airport Road, Amritsar Cantonment, Amritsar",
        localityUrl: "amritsar/amritsar-cantonment-restaurants",
      },
      timing: {
        text: "Opens at 11:30am",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/coffee/",
          name: "Coffee",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,800 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/amritsar/casa-artesa-amritsar-cantonment/info",
      clickActionDeeplink: "",
    },
    distance: "7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9425429","bzone":"0","campaign_id":"18401997","category_id":"1","location_type":"city","location_id":"22","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20903383","isNewAd":"34","ad_position":"11","slider_position":"11","slider_sequence":"11","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":7,\\"boosted_rank\\":11,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.055746\\",\\"cost_for_two_ctr\\":\\"0.118726\\",\\"distance\\":\\"7.314810276031494\\",\\"organic_ctr\\":\\"0.01853\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"99\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.9615026389320086\\",\\"cost_for_two_ctr\\":\\"0.8208152429412904\\",\\"cost_per_unit\\":\\"0.9626749611197511\\",\\"distance\\":\\"0\\",\\"organic_ctr\\":\\"0.5665851892087633\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0\\"},\\"search_id\\":\\"a272ada8-3725-4964-a4c0-d788a1e58e17\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.4316865800429641}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a272ada8-3725-4964-a4c0-d788a1e58e17","location_type":"delivery_cell","location_id":"4114430487827578880","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20903383","element_type":"listing","rank":11,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21614992,
      name: "365 All Day Dining Sarovar Premiere",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/21614992/5585dc409a177e310d3060b5b1eac17c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/21614992/5585dc409a177e310d3060b5b1eac17c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "70",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "70",
            reviewTextSmall: "70 Reviews",
            subtext: "70 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,100 for two",
      },
      cfo: {
        text: "₹850 for one",
      },
      locality: {
        name: "Rani Ka Bagh, Amritsar",
        address: "Circuit House, Rialto Chowk, Rani Ka Bagh, Amritsar",
        localityUrl: "amritsar/rani-ka-bagh-restaurants",
      },
      timing: {
        text: "Opens at 9am",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,100 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/amritsar/365-all-day-dining-sarovar-premiere-rani-ka-bagh/info",
      clickActionDeeplink: "",
    },
    distance: "550 m",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9371053","bzone":"0","campaign_id":"18347517","category_id":"1","location_type":"city","location_id":"22","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21614992","isNewAd":"109","ad_position":"12","slider_position":"12","slider_sequence":"12","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":32,\\"boosted_rank\\":12,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0\\",\\"cost_for_two_ctr\\":\\"0.063596\\",\\"distance\\":\\"0.18095634877681732\\",\\"organic_ctr\\":\\"0.008502\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"1803\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0\\",\\"cost_for_two_ctr\\":\\"0.43967257542656457\\",\\"cost_per_unit\\":\\"0.001555209953343703\\",\\"distance\\":\\"1\\",\\"organic_ctr\\":\\"0.11266521817852612\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.7117794486215538\\"},\\"search_id\\":\\"a272ada8-3725-4964-a4c0-d788a1e58e17\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.35411868326114837}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a272ada8-3725-4964-a4c0-d788a1e58e17","location_type":"delivery_cell","location_id":"4114430487827578880","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21614992","element_type":"listing","rank":12,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21128269,
      name: "Machhiwala By Makhan Fish Company",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/21128269/01dda6531598ed570fa753f404e49868_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/21128269/01dda6531598ed570fa753f404e49868_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/21128269/23f478209b3353199cfecec2f71cc622_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "848",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "152",
            reviewTextSmall: "152 Reviews",
            subtext: "152 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "696",
            reviewTextSmall: "696 Reviews",
            subtext: "696 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,300 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Ranjit Avenue, Amritsar",
        address: "310, Green Avenue, Near Ranjit Avenue, Amritsar",
        localityUrl: "amritsar/ranjit-avenue-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/amritsar/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,300 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: false,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: false,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/amritsar/machhiwala-by-makhan-fish-company-ranjit-avenue/info",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"9372906","bzone":"0","campaign_id":"18349374","category_id":"1","location_type":"city","location_id":"22","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21128269","isNewAd":"109","ad_position":"13","slider_position":"13","slider_sequence":"13","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":37,\\"boosted_rank\\":13,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0\\",\\"cost_for_two_ctr\\":\\"0.058998\\",\\"distance\\":\\"1.2617383003234863\\",\\"organic_ctr\\":\\"0.016857\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"2493\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0\\",\\"cost_for_two_ctr\\":\\"0.4078841846187882\\",\\"cost_per_unit\\":\\"0\\",\\"distance\\":\\"0.848499568036069\\",\\"organic_ctr\\":\\"0.49085641861307255\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"1\\"},\\"search_id\\":\\"a272ada8-3725-4964-a4c0-d788a1e58e17\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.31245937832133625}","subzone_id":"0","flink_display_page":"dineout_home"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a272ada8-3725-4964-a4c0-d788a1e58e17","location_type":"delivery_cell","location_id":"4114430487827578880","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21128269","element_type":"listing","rank":13,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2201154,
      name: "Haveli",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/2201154/563d808afa6227ba1fa68bd81cc7432b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/2201154/563d808afa6227ba1fa68bd81cc7432b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.6",
        rating_text: "4.6",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "158",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.6",
            reviewCount: "158",
            reviewTextSmall: "158 Reviews",
            subtext: "158 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Jandiala, Amritsar",
        address: "Jalandhar Highway, Jandiala, Amritsar",
        localityUrl: "amritsar/jandiala-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/amritsar/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/amritsar/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/amritsar/haveli-jandiala/info",
      clickActionDeeplink: "",
    },
    distance: "16.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"a272ada8-3725-4964-a4c0-d788a1e58e17","location_type":"delivery_cell","location_id":"4114430487827578880","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2201154","element_type":"listing","rank":21}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResturantCard = (props) => {
  const { resData } = props;
  const { info, distance } = resData;
  const { name } = resData.info;
  const { url } = resData.info.image;
  const { rating } = resData.info.ratingNew.ratings.DINING;
  const { cft, cfo } = info;
  console.log(distance);

  return (
    <div className="res-card">
      <div className="res-img">
        <img alt="res image" className="res-logo" src={url} />
      </div>
      <h3>{name}</h3>
      <h4></h4>
      <h5>{rating}</h5>
      <h5>{cfo.text}</h5>
      <h5>{cft.text}</h5>

      <h5>{distance}</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.info.resId} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
