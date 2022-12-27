import Colors from './Colors';

const Data = [
  {
    label: 'Jan',
    value: '420',
    color: Colors.Green,
  },
  {
    label: 'Feb',
    value: '520',
    color: Colors.Lilac,
  },
  {
    label: 'Mar',
    value: '330',
    color: Colors.Purple,
  },
  {
    label: 'Apr',
    value: '720',
    color: Colors.Grey,
  },
  {
    label: 'May',
    value: '610',
    color: Colors.Maroon,
  },
  {
    label: 'Jun',
    value: '530',
    color: Colors.Orange,
  },
  {
    label: 'Jul',
    value: '640',
    color: Colors.Blue,
  },
  {
    label: 'Aug',
    value: '760',
    color: Colors.Pink,
  },
  {
    label: 'Sep',
    value: '370',
    color: Colors.SkyBlue,
  },
  {
    label: 'Oct',
    value: '670',
    color: Colors.Red,
  },
  {
    label: 'Nov',
    value: '120',
    color: Colors.DeepOrange,
  },
  {
    label: 'Dec',
    value: '240',
    color: Colors.Yellow,
  },
];

// categories data

const Categories = [
  {
    category: [
      {
        label: 'Q1',
      },
      {
        label: 'Q2',
      },
      {
        label: 'Q3',
      },
      {
        label: 'Q4',
      },
    ],
  },
];

const Dataset = [
  {
    seriesname: 'Previous Year',
    data: [
      {
        value: '10,000',
        color: Colors.SkyBlue,
      },
      {
        value: '11,000',
        color: Colors.SkyBlue,
      },
      {
        value: '12,000',
        color: Colors.SkyBlue,
      },
      {
        value: '15,000',
        color: Colors.SkyBlue,
      },
    ],
  },
  {
    seriesname: 'Current Year',
    data: [
      {
        value: '25,000',
        color: Colors.Green,
      },
      {
        value: '29,000',
        color: Colors.Green,
      },
      {
        value: '21,000',
        color: Colors.Green,
      },
      {
        value: '26,000',
        color: Colors.Green,
      },
    ],
  },
];

export { Data, Categories, Dataset };
