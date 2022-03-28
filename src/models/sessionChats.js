
import owner1 from "../assets/owner-1.png";
import owner2 from "../assets/owner-2.png";
import owner3 from "../assets/owner-3.png";
import owner4 from "../assets/owner-4.png";

export const FETCHED_DATA = {
    "CHAT_ROOMS": [
        {
            "OWNER_ID": "ow1",
            "ORDER": 0,
            "NAME": "Luciana Gutierrez", 
            "AREA": "Human Resources", 
            "IMAGE": owner1,
            "GUEST_IMAGE": owner4,
            "MESSAGES": [
                {
                    "ID": "ms1", 
                    "TIME": "10:05 AM", 
                    "IS_OWNER_MSG": false,
                    "TEXT": "Luciana, ya envié lo que pediste.", 
                },
                {
                    "ID": "ms2", 
                    "TIME": "10:20 AM", 
                    "IS_OWNER_MSG": true,
                    "TEXT": "Si tengo alguna otra novedad te comento. Gracias!", 
                },
            ],
        },
        {
            "OWNER_ID": "ow2",
            "ORDER": 0,
            "NAME": "Micaela Alvarez", 
            "AREA": "Marketing Manager", 
            "IMAGE": owner2,
            "GUEST_IMAGE": owner4,
            "MESSAGES": [
                {
                    "ID": "ms1", 
                    "TIME": "9:45 AM", 
                    "IS_OWNER_MSG": true,
                    "TEXT": "Hola John! Entre que horarios podrias tener hoy la meeting?", 
                },
                {
                    "ID": "ms2", 
                    "TIME": "10:05 AM", 
                    "IS_OWNER_MSG": false,
                    "TEXT": "Hola Micaela! Muy bien. Yo puedo de 10 a 17hs.", 
                },
                {
                    "ID": "ms3", 
                    "TIME": "10:15 AM", 
                    "IS_OWNER_MSG": true,
                    "TEXT": "Dale, agende la meeting para hoy a las 14hs.", 
                }
            ],
        },
        {
            "OWNER_ID": "ow3",
            "ORDER": 0,
            "NAME": "Manuel Hoffmann", 
            "AREA": "Business Analyst", 
            "IMAGE": owner3,
            "GUEST_IMAGE": owner4,
            "MESSAGES": [
                {
                    "ID": "ms1", 
                    "TIME": "9:30 AM", 
                    "IS_OWNER_MSG": false,
                    "TEXT": "Si, ya lo conseguí. Muchas gracias", 
                },
                {
                    "ID": "ms2", 
                    "TIME": "9:37 AM", 
                    "IS_OWNER_MSG": true,
                    "TEXT": "Gracias a vos!", 
                }
            ],
        }
    ]

};
