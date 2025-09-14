const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile monthly sales data into a report.",
        "date": "2025-09-15",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend weekly sync-up meeting with the team.",
        "date": "2025-09-16",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Email client regarding pending invoices.",
        "date": "2025-09-17",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Website",
        "description": "Revamp homepage with new content.",
        "date": "2025-09-18",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Resolve high-priority login issues.",
        "date": "2025-09-19",
        "category": "Debugging",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from teammates.",
        "date": "2025-09-20",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Mockups",
        "description": "Create UI mockups for the new dashboard.",
        "date": "2025-09-21",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Presentation Slides",
        "description": "Prepare slides for the client demo.",
        "date": "2025-09-22",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Market Research",
        "description": "Analyze competitor features for product improvement.",
        "date": "2025-09-23",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Perform weekly database backup.",
        "date": "2025-09-24",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server Monitoring",
        "description": "Check server logs for unusual activity.",
        "date": "2025-09-25",
        "category": "System Admin",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Conduct quarterly security audit.",
        "date": "2025-09-26",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Content Writing",
        "description": "Write blog post on new product features.",
        "date": "2025-09-27",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Updates",
        "description": "Post weekly updates on social channels.",
        "date": "2025-09-28",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Ad Campaign",
        "description": "Launch Google Ads campaign for product launch.",
        "date": "2025-09-29",
        "category": "Advertising",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin1@example.com",
    "password": "123"
  },
  {
    "id": 2,
    "email": "admin2@example.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employees= JSON.parse(localStorage.getItem('employees')) 
  const admin= JSON.parse(localStorage.getItem('admin')) 
  console.log(employees,admin)
 
}