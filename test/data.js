export default {
    Buttons: [
        {
            type:"normal",
            title:"Normal",
            action: () => {}
        },
        {
            type:"secondary",
            title:"Secondary #1",
            action: () => {}
        },
        {
            type:"secondary",
            title:"Secondary #2",
            action: () => {}
        },
        {
            type:"secondary",
            title:"Secondary #3",
            action: () => {}
        },
        {
            type:"minimal",
            title:"Minimal",
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
    ]
}
