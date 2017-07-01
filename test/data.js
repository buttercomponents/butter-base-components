export default {
    Buttons: [
        {
            type:"normal",
            title:"Normal button",
            action: () => {}
        },
        {
            type:"secondary",
            title:"Secondary button",
            action: () => {}
        },
        {
            type:"secondary",
            title:"Small",
            action: () => {}
        },
        {
            type:"minimal",
            title:"Minimalist",
            action: () => {}
        },
    ],
    Dropdowns: [
        {
            options: [
                "0",
                "1",
                "2",
                "3"
            ]
        },
        {
            options: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4"
            ]
        },
        {
            options: [
                "Ant",
                "Bird",
                "Cat",
                "Dog",
                "Elephant",
                "Fox"
            ]
        }
    ],
    Navbars: [
        {
            toolbar: {
                search: true,
                buttons: [
                    {title: "button-01", icon:"shuffle"},
                    {title: "button-02", icon:"visibility", toogle: true},
                    {title: "button-03", icon:"favorite",  active: true, update: true, toogle: true},
                    {title: "button-04", icon:"settings"}
                ]
            }
        },
        {
            title: "Settings",
            goBack: () => {},
            toolbar: {
                search: false,
                buttons: [
                    {title: "button-01", icon:"keyboard"},
                    {title: "button-02", icon:"info_outline"},
                    {title: "button-03", icon:"update", update: true},
                    {title: "button-04", icon:"filter_list", active: true, toogle: true}
                ]
            }
        },
        {
            title: "Fight Club (1999)",
            goBack: () => {},
            toolbar: {
                search: false,
                buttons: [
                    {title: "button-01", icon:"fiber_manual_record"},
                    {title: "button-02", icon:"link"},
                    {title: "button-03", icon:"favorite_outline"},
                    {title: "button-04", icon:"visibility"},
                ]
            }
        }
    ],
    Switches: [
        { selected: true },
        { selected: false },
        { selected: true },
        { selected: false },
        { selected: true }
    ]
}
