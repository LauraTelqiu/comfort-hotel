import image1 from './assets/about-us-img-1.jpeg'
import image2 from './assets/about-us-img-2.jpeg'
import image3 from './assets/about-us-img-3.jpeg'
import image4 from './assets/about-us-img-4.jpeg'
import single from './assets/single-room.jpeg'
import double from './assets/double-room.jpeg'
import lux from './assets/lux.jpeg'
import vip from './assets/vip.jpeg'
import rev1 from './assets/customer-1.jpeg'
import rev2 from './assets/customer-2.jpeg'
import rev3 from './assets/person-3_rxtqvi.jpeg'


export const pageLinks = [
  { id: 1, href: '#header', text: 'home' },
  { id: 2, href: '#about', text: 'about us' },
  { id: 3, href: '#rooms', text: 'rooms' },
  { id: 4, href: '#customers', text: 'customers' },
  { id: 5, href: '#footer', text: 'contact' },

];
export const socialLinks = [
  { id: 1, href: 'https://www.linkedin.com/feed/', icon: 'fab fa-linkedin' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.facebook.com/', icon: 'fab fa-facebook' },
];
export const aboutImg = [
  { id: 1, img: image1, className: "image image-1" },
  { id: 2, img: image2, className: "image image-2" },
  { id: 3, img: image3, className: "image image-3" },
  { id: 4, img: image4, className: "image image-4" },

];
export const rooms = [
  {
    id: 1,
    img: single,
    title: 'Single Room',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    price: 99
  },
  {
    id: 2,
    img: double,
    title: 'Double Room',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    price: 199
  },
  {
    id: 3,
    img: lux,
    title: 'lux',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    price: 299
  },
  {
    id: 4,
    img: vip,
    title: 'VIP',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    price: 399
  },

];





export const people = [
  {
    id: 1,
    name: "Helen Doe",
    image: rev1,
    stars: "fas fa- star",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore magni assumenda laboriosam nesciunt animi dolorem inventore mollitia nihil, possimus, vitae odio.Veniam alias, mollitia abrem tenetur sint ex."
  },
  {
    id: 2,
    image: rev2,
    name: "Monica Smith",
    stars: "fas fa- star",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore magni assumenda laboriosam nesciunt animi dolorem inventore mollitia nihil, possimus, vitae odio.Veniam alias, mollitia abrem tenetur sint ex."
  },

  {
    id: 3,
    image: rev3,
    name: 'Hester Hogan',
    stars: "fas fa- star",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore magni assumenda laboriosam nesciunt animi dolorem inventore mollitia nihil, possimus, vitae odio.Veniam alias, mollitia abrem tenetur sint ex."
  },
]




