export default {
  menu: {
    items: [
      {title: 'movies'},
      {title: 'shows'},
      {title: 'anime'},
      {title: 'independent'}
    ]
  },
  view: {
    titlebar: {
      platform: 'darwin',
      actions: {
        close: () => console.log('Close window...'),
        max: () => console.log('Maximize window...'),
        min: () => console.log('Minimize window...'),
        fullscreen: (active) => {
          console.log(`${active ? 'Enter' : 'Exit'} Fullscreen...`)
        }
      }
    },
    toolbar: {
      search: false,
      buttons: [
        {title: 'button-01', icon: 'shuffle'},
        {title: 'button-02', icon: 'visibility', toogle: true},
        {title: 'button-03', icon: 'favorite', active: true, update: true, toogle: true},
        {title: 'button-04', icon: 'settings'}
      ]
    }
  },
  titleBar: [
    {
      platform: 'darwin',
      actions: {
        close: () => console.log('Close window...'),
        max: () => console.log('Maximize window...'),
        min: () => console.log('Minimize window...'),
        fullscreen: (active) => {
          console.log(`${active ? 'Enter' : 'Exit'} Fullscreen...`)
        }
      }
    },
    {
      title: 'Linux-style',
      platform: 'linux',
      actions: {
        close: () => console.log('Close window...'),
        max: () => console.log('Maximize window...'),
        min: () => console.log('Minimize window...'),
        fullscreen: (active) => {
          console.log(`${active ? 'Enter' : 'Exit'} Fullscreen...`)
        }
      }
    },
    {
      title: 'source_file.mp4',
      platform: 'win32',
      actions: {
        close: () => console.log('Close window...'),
        max: () => console.log('Maximize window...'),
        min: () => console.log('Minimize window...'),
        fullscreen: (active) => {
          console.log(`${active ? 'Enter' : 'Exit'} Fullscreen...`)
        }
      }
    }
  ],
  buttons: [
    {
      type: 'normal',
      title: 'Normal button',
      action: () => {}
    },
    {
      type: 'secondary',
      title: 'Secondary button',
      action: () => {}
    },
    {
      type: 'secondary',
      title: 'Icon',
      icon: 'touch_app',
      action: () => {}
    },
    {
      type: 'minimal',
      title: 'Minimalist',
      action: () => {}
    }
  ],
  dropdowns: {
    text: [{
      options: [
        '0',
        '1',
        '2',
        '3'
      ]
    },
    {
      options: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ]
    },
    {
      options: [
        'Ant',
        'Bird',
        'Cat',
        'Dog',
        'Elephant',
        'Fox',
        'Giraffe',
        'Hawk',
        'Iguana',
        'Jaguar',
        'Koala',
        'Lion',
        'Makaw',
        'Nyala',
        'Owl',
        'Penguin',
        'Quail',
        'Rabbit',
        'Snake',
        'Turtule',
        'Urial',
        'Viper',
        'Wolf',
        'Yak',
        'Zebra',
        'Very Long Fake Animal Name',
      ]
    }],
    color: [
      {
        options: [
          '#555',
          '#777',
          '#999',
          '#BBB',
          '#DDD',
          '#FFF'
        ]
      },
      {
        options: [
          '#2d72d9',
          '#0b6fcb',
          '#1689f3',
          '#46a1f5',
          '#76baf8',
          '#a7d2fa'
        ]
      },
      {
        options: [
          '#ff0033',
          '#9933ff',
          '#0066ff',
          '#00cc33',
          '#ffcc00',
          '#ff9933'
        ]
      }
    ]
  },
  navbars: [
    {
      toolbar: {
        search: true,
        buttons: [
          {title: 'button-01', icon: 'shuffle'},
          {title: 'button-02', icon: 'visibility', toogle: true},
          {title: 'button-03', icon: 'favorite', active: true, update: true, toogle: true},
          {title: 'button-04', icon: 'settings'}
        ]
      }
    },
    {
      title: 'Settings',
      goBack: () => {},
      toolbar: {
        search: false,
        buttons: [
          {title: 'button-01', icon: 'keyboard'},
          {title: 'button-02', icon: 'info_outline'},
          {title: 'button-03', icon: 'update', update: true},
          {title: 'button-04', icon: 'filter_list', active: true, toogle: true}
        ]
      }
    },
    {
      title: 'Fight Club (1999)',
      goBack: () => {},
      toolbar: {
        search: false,
        buttons: [
          {title: 'button-01', icon: 'fiber_manual_record'},
          {title: 'button-02', icon: 'link'},
          {title: 'button-03', icon: 'favorite_outline'},
          {title: 'button-04', icon: 'visibility'}
        ]
      }
    }
  ],
  switches: [
    { selected: true },
    { selected: false },
    { selected: true },
    { selected: false },
    { selected: true }
  ],
  stars: [
    { rating: 2},
    { rating: 10},
    { rating: 7, count: 2},
    { rating: 7, count: 14}
  ]
}
