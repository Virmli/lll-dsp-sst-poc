import json

def main(event, context):
    print(event)
    print(context)
    return {
        "statusCode": 200,
        "body": json.dumps([{
            "data": {
                "attributes": {
                    "address1": "115 Fifth Avenue",
                    "address2": None,
                    "address_for_google": "114 5th Ave, NYC. 10011 New York United States",
                    "all_events_url": "https://www.eventbrite.ca/o/lululemon-flatiron-9596896295",
                    "atg_domain_id": None,
                    "atg_site": "/content/shop/en_US",
                    "city": "New York",
                    "classes_image_url": None,
                    "classes_url": "https://mindbody.io/fitness/studios/hub-seventeen-2",
                    "close_date": None,
                    "country": "US",
                    "country_name": None,
                    "disable_email_subscription": None,
                    "email": "flatiron-store@lululemon.com",
                    "event_rentals_image_url": None,
                    "event_rentals_url": None,
                    "events_image_url": None,
                    "events_url": "https://www.eventbrite.ca/o/lululemon-flatiron-9596896295",
                    "facebook_url": "https://www.facebook.com/lululemonNYC",
                    "facebook_username": "lululemon New York City",
                    "food_order_url": None,
                    "friendly_from_name": "Flatiron Lululemon",
                    "fuel_menu": None,
                    "has_mirror": True,
                    "hybrid_experiential_store": False,
                    "instagram_handle": "@lululemonNYC",
                    "instagram_url": "https://www.instagram.com/lululemonNYC",
                    "is_rfid_enabled": True,
                    "latitude": 40.7379574,
                    "latitude_cos": 0.75770216666604,
                    "latitude_sin": 0.6526005107488,
                    "live_chat_url": "https://shop.lululemon.com/live-chat",
                    "locale_code": None,
                    "longitude": -73.9927205,
                    "longitude_cos": 0.27575948308522,
                    "longitude_sin": -0.96122666811142,
                    "message": "Experience lululemon Studio Mirror in-store. Bring us your questions and discover all the perks of lululemon Studio.",
                    "name": "Flatiron",
                    "phone": "3322396949",
                    "phone_secondary": "",
                    "postal_code": "10011",
                    "primary_language": None,
                    "primary_language_code": "en",
                    "primary_language_name": None,
                    "province_code": None,
                    "rfid_site_name": "10210-Flatiron - New York City",
                    "secondary_language": None,
                    "secondary_language_code": None,
                    "secondary_language_name": None,
                    "shipping_address1": "114 Fifth Avenue",
                    "shipping_address2": None,
                    "shipping_address3": None,
                    "shipping_city": "New York",
                    "shipping_country": "USA",
                    "shipping_postal_code": "10011",
                    "shipping_state": "NY",
                    "slug": "/stores/us/new-york/Flatiron",
                    "state": "NY",
                    "status": "A",
                    "store_code": None,
                    "store_hours_special_instructions": None,
                    "store_number": "10210",
                    "store_type2": None,
                    "sub_header": None,
                    "template": "/apps/shop/templates/storeV2",
                    "time_zone": "America/New_York",
                    "tune_url": None,
                    "twitter_handle": "@lululemonNYC",
                    "twitter_url": "https://twitter.com/lululemonnyc",
                    "waitwhile_footwear_id": None,
                    "waitwhile_service_id": "4QGMrczcc5Ifjbf1qJrN",
                    "website_url": "https://shop.lululemon.com/stores/us/new-york/Flatiron",
                    "weekly_schedule_local_time": {
                        "friday": {
                            "close": "20:00",
                            "open": "10:00"
                        },
                        "monday": {
                            "close": "20:00",
                            "open": "10:00"
                        },
                        "saturday": {
                            "close": "20:00",
                            "open": "10:00"
                        },
                        "sunday": {
                            "close": "19:00",
                            "open": "11:00"
                        },
                        "thursday": {
                            "close": "20:00",
                            "open": "10:00"
                        },
                        "tuesday": {
                            "close": "20:00",
                            "open": "10:00"
                        },
                        "wednesday": {
                            "close": "20:00",
                            "open": "10:00"
                        }
                    },
                    "zone_name": None
                },
                "id": "10210",
                "links": {
                    "self": "/v1/stores/10210"
                },
                "relationships": {
                    "abilities": {
                        "data": [
                            {
                                "id": "AUTH_XCENTER_NA",
                                "type": "store_abilities"
                            },
                            {
                                "id": "email_receipts",
                                "type": "store_abilities"
                            },
                            {
                                "id": "INV_TRUEVUE_NA",
                                "type": "store_abilities"
                            },
                            {
                                "id": "PISOrderVisibility",
                                "type": "store_abilities"
                            },
                            {
                                "id": "RFID_TRANSFERS",
                                "type": "store_abilities"
                            },
                            {
                                "id": "RFIDInventoryAvailableToSell",
                                "type": "store_abilities"
                            },
                            {
                                "id": "ship_to_store",
                                "type": "store_abilities"
                            },
                            {
                                "id": "xStore17",
                                "type": "store_abilities"
                            },
                            {
                                "id": "LIKE_NEW",
                                "type": "store_abilities"
                            },
                            {
                                "id": "PERSONAL_SHOPPING",
                                "type": "store_abilities"
                            }
                        ],
                        "links": {
                            "self": "/v1/stores/10210/abilities"
                        }
                    },
                    "amenities": {
                        "data": [
                            {
                                "id": "ambassador_program",
                                "type": "store_amenities"
                            },
                            {
                                "id": "change_rooms",
                                "type": "store_amenities"
                            },
                            {
                                "id": "event_space",
                                "type": "store_amenities"
                            },
                            {
                                "id": "mats_and_blocks",
                                "type": "store_amenities"
                            },
                            {
                                "id": "sweat_studios",
                                "type": "store_amenities"
                            },
                            {
                                "id": "hemming",
                                "type": "store_amenities"
                            }
                        ],
                        "links": {
                            "self": "/v1/stores/10210/amenities"
                        }
                    },
                    "images": {
                        "data": [
                            {
                                "id": "10210_0_hero",
                                "type": "store_images"
                            },
                            {
                                "id": "10210_1_bento_left",
                                "type": "store_images"
                            },
                            {
                                "id": "10210_2_bento_right",
                                "type": "store_images"
                            }
                        ],
                        "links": {
                            "self": "/v1/stores/10210/images"
                        }
                    },
                    "spaces": {
                        "data": [
                            {
                                "id": "10210_0",
                                "type": "store_spaces"
                            },
                            {
                                "id": "10210_1",
                                "type": "store_spaces"
                            },
                            {
                                "id": "10210_2",
                                "type": "store_spaces"
                            }
                        ],
                        "links": {
                            "self": "/v1/stores/10210/spaces"
                        }
                    },
                    "special_schedule_local_times": {
                        "data": [],
                        "links": {
                            "self": "/v1/stores/10210/special_schedule_local_times"
                        }
                    },
                    "store_status": {
                        "data": {
                            "id": "active",
                            "type": "store_statuses"
                        },
                        "links": {
                            "self": "/v1/stores/10210/status"
                        }
                    },
                    "type": {
                        "data": {
                            "id": "experiential",
                            "type": "store_types"
                        },
                        "links": {
                            "self": "/v1/stores/10210/type"
                        }
                    }
                },
                "type": "stores"
            },
            "links": {
                "self": "/v1/stores/10210"
            }
        }])
    }
