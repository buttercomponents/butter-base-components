export default {
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
