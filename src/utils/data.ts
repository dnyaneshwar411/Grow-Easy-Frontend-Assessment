import { ElementType, PropertyType } from "./types";

// thesbelow are the properties to change the configurations of indivisual array, used to edit banner configuration.
export const propeties: PropertyType[] = [
  { key: 1, title: "title", displayTitle: "Title", iterables: ["fontSize", "color", "top", "left"], isContent: true },
  { key: 2, title: "description" as keyof ElementType, displayTitle: "Description", iterables: ["fontSize", "color", "top", "left"], isContent: true },
  { key: 3, title: "cta" as keyof ElementType, displayTitle: "Call to Action", iterables: ["fontSize", "color", "top", "left", "backgroundColor"], isContent: true },
  { key: 4, title: "image" as keyof ElementType, displayTitle: "Image", iterables: ["height", "width", "top", "left"], isContent: false },
]

// list of all the banners is provided in the array below with the requried configurations for each banner.
export const allBannersElements: ElementType[] = [
  {
    key: 123,
    title: {
      content: "Welcome to Our Event",
      styles: {
        top: "20px",
        left: "40px",
        fontSize: "32px",
        color: "#FF0000",
      }
    },
    description: {
      content: "",
      styles: {
        top: "150px",
        left: "40px",
        fontSize: "16px",
        color: "#FFFFFF"
      }
    },
    cta: {
      content: "Register Now",
      styles: {
        top: "345px",
        left: "130px",
        fontSize: "18px",
        color: "#FFFFFF",
        backgroundColor: "#FF5733",
        class: "btn-3"
      }
    },
    image: {
      src: "https://picsum.photos/200/300?grayscale",
      styles: {
        height: "241px",
        width: "241px",
        top: "88px",
        left: "87px",
      }
    },
    background: "/bg-4.jpg"
  },
  {
    key: 789,
    title: {
      content: "Discover Our New Features",
      styles: {
        top: "10px",
        left: "60px",
        fontSize: "32px",
        color: "#FFD700",
      }
    },
    description: {
      content: "Explore the latest updates and improvements.",
      styles: {
        top: "170px",
        left: "60px",
        fontSize: "20px",
        color: "#FFA500"
      }
    },
    cta: {
      content: "Learn More",
      styles: {
        top: "280px",
        left: "40px",
        fontSize: "20px",
        color: "#FFD700",
        backgroundColor: "#FF4500",
        class: "btn-3"
      }
    },
    image: {
      src: "https://cdn.prod.website-files.com/636ebb4d131625f3efdea089/64b5a7eecc3f96b2ac19d62b_shutterstock_1840661509.jpg",
      styles: {
        height: "160px",
        width: "285px",
        top: "176px",
        left: "57px",
      }
    },
    background: "/bg-1.png"
  },
  {
    key: 1011,
    title: {
      content: "Find Your Love",
      styles: {
        top: "15px",
        left: "30px",
        fontSize: "50px",
        color: "#4CAF50",
      }
    },
    description: {
      content: "Waiting!",
      styles: {
        top: "200px",
        left: "30px",
        fontSize: "18px",
        color: "#000000"
      }
    },
    cta: {
      content: "Join Now!",
      styles: {
        top: "260px",
        left: "28px",
        fontSize: "20px",
        color: "#FFFFFF",
        backgroundColor: "#FF6347"
      }
    },
    image: {
      src: "https://picsum.photos/260/360",
      styles: {
        height: "200px",
        width: "200px",
        top: "140px",
        left: "180px",
      }
    },
    background: "/bg-2.png"
  },
  {
    key: 246,
    title: {
      content: "Excited for the event",
      styles: {
        top: "20px",
        left: "40px",
        fontSize: "32px",
        color: "#0000FF",
      }
    },
    description: {
      content: "",
      styles: {
        top: "150px",
        left: "40px",
        fontSize: "16px",
        color: "#FFFFFF"
      }
    },
    cta: {
      content: "Register Now",
      styles: {
        top: "345px",
        left: "130px",
        fontSize: "18px",
        color: "#FFFFFF",
        backgroundColor: "#FF5733",
        class: "btn-4"
      }
    },
    image: {
      src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
      styles: {
        height: "241px",
        width: "241px",
        top: "88px",
        left: "87px",
      }
    },
    background: "https://st4.depositphotos.com/16940446/26129/v/450/depositphotos_261294724-stock-illustration-empty-banner-frame-polka-dot.jpg"
  },
  {
    key: 124,
    title: {
      content: "Join Our Webinar",
      styles: {
        top: "25px",
        left: "50px",
        fontSize: "30px",
        color: "#0000FF",
      }
    },
    description: {
      content: "",
      styles: {
        top: "120px",
        left: "60px",
        fontSize: "16px",
        color: "#000000"
      }
    },
    cta: {
      content: "Sign Up Today",
      styles: {
        top: "320px",
        left: "120px",
        fontSize: "20px",
        color: "#FFFFFF",
        backgroundColor: "#28A745",
      }
    },
    image: {
      src: "https://picsum.photos/200/300",
      styles: {
        height: "250px",
        width: "250px",
        top: "90px",
        left: "80px",
      }
    },
    background: "/bg-5.jpg"
  }
]

// all of the default background images for the banner templates is defined contained in an array.
export const backgrounds: string[] = ["/bg-1.png", "/bg-2.png", "/bg-3.jpg", "/bg-4.jpg", "/bg-5.jpg"];