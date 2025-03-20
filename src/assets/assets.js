import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import cross_icon from "./cross_icon.svg";
import upload_area from "./upload_area.svg";
import sketch from "./sktech.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.svg";
import adobe_logo from "./adobe_logo.svg";
import paypal_logo from "./paypal_logo.svg";
import course_1_thumbnail from "./course_1.png";
import course_2_thumbnail from "./course_2.png";
import course_3_thumbnail from "./course_3.png";
import course_4_thumbnail from "./course_4.png";
import star from "./rating_star.svg";
import star_blank from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import profile_img_4 from "./profile_img_4.png";
import arrow_icon from "./arrow_icon.svg";
import down_arrow_icon from "./down_arrow_icon.svg";
import time_left_clock_icon from "./time_left_clock_icon.svg";
import time_clock_icon from "./time_clock_icon.svg";
import user_icon from "./user_icon.svg";
import home_icon from "./home_icon.svg";
import add_icon from "./add_icon.svg";
import my_course_icon from "./my_course_icon.svg";
import person_tick_icon from "./person_tick_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import file_upload_icon from "./file_upload_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import dropdown_icon from "./dropdown_icon.svg";
import patients_icon from "./patients_icon.svg";
import play_icon from "./play_icon.svg";
import blue_tick_icon from "./blue_tick_icon.svg";
import course_4 from "./course_4.png";
import profile_img from "./profile_img.png";
import profile_img2 from "./profile_img2.png";
import profile_img3 from "./profile_img3.png";
import lesson_icon from "./lesson_icon.svg";
import course from "./course.jpg";
import course1 from "./course1.jpg";
import course2 from "./courser5.png";
import course3 from "./course2.jpg";

export const assets = {
  search_icon,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
  dropdown_icon,
  cross_icon,
  upload_area,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,

  course_4,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  patients_icon,
  profile_img,
  profile_img2,
  profile_img3,
  profile_img_4,
  play_icon,
  blue_tick_icon,
  lesson_icon,
};

export const dummyEducatorData = {
  _id: "675ac1512100b91a6d9b8b24",
  name: "GreatStack",
  email: "user.greatstack@gmail.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
  createdAt: "2024-12-12T10:56:17.930Z",
  updatedAt: "2024-12-12T10:56:17.930Z",
  __v: 0,
};

export const dummyTestimonial = [
  {
    name: "Peter Pelz",
    role: "Figma Course",
    image: assets.profile_img_1,
    rating: 5,
    feedback:
      "A comprehensive course that teaches you the essentials of UI/UX design with Figma. Great for beginners looking to dive into design tools with hands-on projects.",
  },
  {
    name: "Nina Miles",
    role: "Blender Course",
    image: assets.profile_img_2,
    rating: 4,
    feedback:
      "An amazing deep dive into 3D modeling with Blender. This course is perfect for beginners who want to get started with 3D design and animation without feeling overwhelmed.",
  },
  {
    name: "James Smith",
    role: "Canva Course",
    image: assets.profile_img_3,
    rating: 4.5,
    feedback:
      "Perfect for anyone looking to create stunning designs quickly. The course covers everything from templates to custom branding, making it ideal for non-designers.",
  },
  {
    name: "Anna Jacksn",
    role: "Sketch Course",
    image: assets.profile_img_4,
    rating: 4.5,
    feedback:
      "A detailed course that walks you through Sketch, an essential tool for modern UI design. The lessons are perfect for those transitioning from other design software.",
  },
];

export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      courseTitle: "Introduction to Canva",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Advanced Figma Mastery",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Sketch Basics",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Introduction to Adobe",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Learn Blender Like a Pro",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
  ],
  totalCourses: 8,
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:59:49.964Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Advanced Python Programming",
    purchaseDate: "2024-12-20T11:03:42.931Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Web Development Bootcamp",
    purchaseDate: "2024-12-20T11:04:48.798Z",
  },
];

export const dummyCourses = [
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",
    courseTitle: "Introduction to Canva",
    courseDescription:
      "<h2>Learn the Basics of Canva</h2><p>Canva is a powerful design tool that allows you to create stunning graphics with ease. In this course, you will learn the fundamentals of Canva, including layout design, typography, and image editing.</p><p>This course is perfect for beginners who want to start their journey in graphic design. By the end of this course, you will be able to create professional-looking designs for social media, presentations, and more.</p><ul><li>Understand the basics of graphic design</li>",
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with Canva",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Canva?",
            lectureDuration: 16,
            lectureUrl:
              "https://www.youtube.com/watch?v=ipvofYQDgBA&pp=ygUNd2hhdCBpcyBjYW52YQ%3D%3D",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Your Environment",
            lectureDuration: 19,
            lectureUrl:
              "https://www.youtube.com/watch?v=wCEtWz5imUs&pp=ygUTaG93IGRvZXMgY2FudmEgd29yaw%3D%3D",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Working with Text and Fonts",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Text and Fonts",
            lectureDuration: 20,
            lectureUrl:
              "https://youtu.be/inZ7qIn74TE?list=PL2jU5A3fxwC9Q6F64qOBs2FWKbMJLOlGO",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Creating Layouts and Templates",
            lectureDuration: 10,
            lectureUrl:
              "https://www.youtube.com/watch?v=SmoHonxUkiQ&pp=ygUTbGF5b3V0IGRlc2lnbiBjYW52YQ%3D%3D",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
        _id: "6773e37360cb0ab974342314",
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 4,
    courseThumbnail: course_1_thumbnail,
  },
  {
    _id: "675ac1512100b91a6d9b8b24",
    courseTitle: "Advanced Figma Mastery",
    courseDescription:
      "<h2>Deep Dive into Figma Design</h2><p>This course is designed for those who have a basic understanding of design tools and want to take their skills to the next level using Figma. You will explore advanced topics such as prototyping, component design, and collaborative design workflows. By the end of this course, you will be able to create high-quality design systems, work efficiently with Figma’s advanced features, and leverage its collaborative tools for real-world design projects.</p><ul><li>Master the use of Figma’s components and styles</li><li>Design interactive prototypes with advanced animations</li><li>Collaborate seamlessly with team members and stakeholders</li></ul>",
    coursePrice: 79.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Figma",
        chapterContent: [
          {
            lectureId: " lecture1",
            lectureTitle: "What is Figma?",
            lectureDuration: 720,
            lectureUrl:
              "https://youtu.be/Cx2dkpBxst8?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Explore ideas",
            lectureDuration: 850,
            lectureUrl:
              "https://youtu.be/dXQ7IHkTiMM?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Prototyping and Interactivity in Figma",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Create Designs",
            lectureDuration: 900,
            lectureUrl:
              "https://youtu.be/wvFd-z7jSaA?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Build Prototypes",
            lectureDuration: 950,
            lectureUrl:
              "https://youtu.be/lTIeZ2ahEkQ?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
        _id: "6776369244daad0f313d81a9",
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T06:47:54.446Z",
    __v: 3,
    courseThumbnail: course_2_thumbnail,
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ae",
    courseTitle: "Sketch Basics",
    courseDescription:
      "<h2>Master Sketch for Design</h2><p>Sketch is a powerful design tool used by professionals for creating stunning user interfaces and digital designs. This course covers the fundamentals of Sketch, including artboards, vector editing, and the use of reusable components. By the end of this course, you will be proficient in using Sketch to create high-quality designs, collaborate with teams, and produce responsive layouts for various devices.</p><ul><li>Master artboards and layers</li><li>Learn to use symbols and reusable components</li><li>Create interactive prototypes with Sketch</l",
    coursePrice: 69.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with Sketch",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Sketch?",
            lectureDuration: 10,
            lectureUrl:
              "https://youtu.be/fndq5vWZTy8?list=PLLnpHn493BHE6UIsdKYlS5zu-ZYvx22CS",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Understanding Artboards",
            lectureDuration: 18,
            lectureUrl:
              "https://youtu.be/A-0xWk6BFq4?list=PLLnpHn493BHE6UIsdKYlS5zu-ZYvx22CS",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Basic Techniques in Sketch",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Styling Shapes With the Inspector",
            lectureDuration: 15,
            lectureUrl:
              "https://youtu.be/w6-f2tzkCF8?list=PLLnpHn493BHE6UIsdKYlS5zu-ZYvx22CS",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Using Text Styles",
            lectureDuration: 20,
            lectureUrl:
              "https://youtu.be/NN1_mz8PPoQ?list=PLLnpHn493BHE6UIsdKYlS5zu-ZYvx22CS",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [],
    createdAt: "2024-12-27T11:30:00.000Z",
    updatedAt: "2024-12-31T04:14:49.773Z",
    __v: 2,
    courseThumbnail: course_3_thumbnail,
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ab",
    courseTitle: "Master Adobe XD",
    courseDescription:
      "<h2>Design the Future with Adobe XD</h2><p>This course covers the essentials of UI/UX design using Adobe XD, including wireframing, prototyping, and designing user-friendly interfaces. Ideal for beginners, this course will prepare you to create intuitive and interactive designs for websites and mobile apps.</p><p>By the end of this course, you will be able to design, prototype, and share interactive user interfaces with Adobe XD, enhancing the user experience across platforms.</p><ul><li>Understand UI/UX design principles</li><li>Learn how to create interactive prototypes</li><li>Explore tools for collaboration and design handoff</li></ul>",
    coursePrice: 59.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Adobe XD Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Adobe XD",
            lectureDuration: 700,
            lectureUrl:
              "https://youtu.be/j-XDG3AYTYE?list=PL4cUxeGkcC9hOQFhUxCE8z1aB3OpwKXaJ",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "The Adobe XD Interface",
            lectureDuration: 750,
            lectureUrl:
              "https://youtu.be/iR7QMjZvwx8?list=PL4cUxeGkcC9hOQFhUxCE8z1aB3OpwKXaJ",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Mastering Artboards and Shapes in Adobe XD",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Artboads",
            lectureDuration: 800,
            lectureUrl:
              "https://youtu.be/rlgXfhS86DY?list=PL4cUxeGkcC9hOQFhUxCE8z1aB3OpwKXaJ",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Shapes",
            lectureDuration: 850,
            lectureUrl:
              "https://youtu.be/49UFHWPdw-I?list=PL4cUxeGkcC9hOQFhUxCE8z1aB3OpwKXaJ",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T06:56:13.208Z",
    __v: 1,
    courseThumbnail: course3,
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a7",
    courseTitle: "Learn Blender Like a Pro",
    courseDescription:
      "<h2>Master Blender for 3D Design</h2><p>Blender is a versatile and powerful tool for 3D modeling, animation, and rendering. This course introduces the fundamentals of Blender, including 3D modeling, texturing, lighting, and animation techniques. By the end of this course, you will be able to create detailed 3D models, animate them, and render high-quality scenes for games, movies, or digital art.</p><ul><li>Master 3D modeling and sculpting techniques</li><li>Learn texturing, lighting, and rendering workflows</li><li>Create animations and realistic simulations</li></ul>",
    coursePrice: 99.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Blender Interface and Tools",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "About Blender",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/B0J27sf9N1Y",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Basic Modelling",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/tBpnKTAc5Eo",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Texturing and Materials in Blender",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Modelling the Icing",
            lectureDuration: 800,
            lectureUrl: "https://youtu.be/AqJx5TJyhes",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Sculpting",
            lectureDuration: 850,
            lectureUrl: "https://youtu.be/--GVNZnSROc",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2024-12-31T05:31:27.290Z",
    __v: 2,
    courseThumbnail: course_4_thumbnail,
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ac",
    courseTitle: "Introduction to Adobe Photoshop",
    courseDescription:
      "<h2><h2>Master Photoshop Fundamentals</h2><p>Learn the fundamentals of Adobe Photoshop and explore key tools for photo editing, graphic design, and digital art creation. This course is perfect for beginners and creative professionals looking to enhance their design skills.</p><p>By the end of this course, you will be proficient in using Photoshop to manipulate images, create compositions, and apply advanced editing techniques.</p><ul><li>Master photo retouching and image manipulation</li><li>Learn to work with layers, masks, and filters</li><li>Explore advanced design and compositing techniques</li></ul></li></ul>",
    coursePrice: 69.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Unlock the Power of Photoshop",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Photoshop?",
            lectureDuration: 600,
            lectureUrl:
              "https://youtu.be/xTzvQkOll2U?list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Create Stunning Visuals with Photoshop",
            lectureDuration: 720,
            lectureUrl:
              "https://www.youtube.com/watch?v=aNpO6G72O3w&list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE&index=4&pp=iAQB",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Elevate Your Design Skills with Photoshop",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Photoshop Tips and Techniques for Designers",
            lectureDuration: 800,
            lectureUrl:
              "https://www.youtube.com/watch?v=ok9cVCETDeE&list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE&index=3&pp=iAQB",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Transform Your Images with Photoshop",
            lectureDuration: 850,
            lectureUrl:
              "https://www.youtube.com/watch?v=doI1eH_nCxs&list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE&index=5&pp=iAQB",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2024-12-31T05:32:55.357Z",
    __v: 1,
    courseThumbnail: course,
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ad",
    courseTitle: "Learn Adobe After Effects Like A Pro",
    courseDescription:
      "<h2>Start Your Adobe After Effects Journey</h2><p>Adobe After Effects is a powerful tool for creating stunning motion graphics and visual effects. This course teaches you the essentials of animation, compositing, and visual effects using After Effect",
    coursePrice: 89.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Adobe After Effects",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Basics of Motion Graphics in After Effects",
            lectureDuration: 30,
            lectureUrl:
              "https://youtu.be/uRdfvpQ5rcQ?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Keyframe Animation Techniques in After Effects",
            lectureDuration: 25,
            lectureUrl:
              "https://youtu.be/FuJMHF510mc?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Working with Layers and Compositions in After Effects",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle:
              "Working with Layers and Compositions in After Effects",
            lectureDuration: 20,
            lectureUrl:
              "https://youtu.be/ijOQvj48nUE?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "The Project Panel Links panel",
            lectureDuration: 25,
            lectureUrl:
              "https://youtu.be/GMnfNYLPWjw?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
        _id: "6773acf160cb0ab974342248",
      },
    ],
    createdAt: "2024-12-27T10:00:00.000Z",
    updatedAt: "2024-12-31T09:57:48.992Z",
    __v: 3,
    courseThumbnail: course1,
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1aa",
    courseTitle: "Introduction to Adobe Illustrator",
    courseDescription:
      "<h2>Unlock the Power of Adobe Illustrator</h2><p>This course provides a comprehensive introduction to graphic design using Adobe Illustrator. You will learn how to create stunning vector illustrations, work with typography, and design professional logos and graphics.</p><p>By the end of this course, you will have a solid understanding of Illustrator's tools and techniques, enabling you to create eye-catching design",
    coursePrice: 89.99,
    isPublished: true,
    discount: 30,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "About Adobe Illustrator",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is Adobe Illustrator?",
            lectureDuration: 600,
            lectureUrl:
              "https://youtu.be/Ib8UBwu3yGA?list=PLgGbWId6zgaVUW5oKfqg6v-SihBo50dmB",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Working with Layers and Artboards in Illustrator",
            lectureDuration: 720,
            lectureUrl:
              "https://www.youtube.com/watch?v=C0t1bMhKZ0Q&list=PLgGbWId6zgaVUW5oKfqg6v-SihBo50dmB&index=3&pp=iAQB",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Unlock Your Creative Potential with Illustrator",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "10 Essential Design Tips for Illustrator",
            lectureDuration: 800,
            lectureUrl:
              "https://youtu.be/kp5ApIObAo4?list=PLgGbWId6zgaVUW5oKfqg6v-SihBo50dmB",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "How to Make Gradients",
            lectureDuration: 850,
            lectureUrl:
              "https://youtu.be/DK5KaVyyHt4?list=PLgGbWId6zgaVUW5oKfqg6v-SihBo50dmB",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T06:53:59.753Z",
    __v: 1,
    courseThumbnail: course2,
  },
];
