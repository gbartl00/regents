const boardDescription = 'The Board of Regents for the Oklahoma Agricultural and Mechanical Colleges was created in 1944 by Section 31a, Article 6, of the Oklahoma Constitution. It consists of nine members; eight members are appointed by the Governor by and with the advice of the senate, and the ninth member is the President of the State Board of Agriculture. The Board has the supervision, management, and control of five institutions including Oklahoma State University, Connors State College, Langston University, Northeastern Oklahoma Agricultural and Mechanical College, and Oklahoma Panhandle State University.';
const members = [
 {id:'cary-baetz',name:'Mr. Cary Baetz',image:'p2-13',position:'Position 1: Vice Chair, At-Large Appointment',term:'May 12, 2022 to April 4, 2030'},
 {id:'billy-taylor',name:'Mr. Billy G. Taylor',image:'p2-6',position:'Position 2: Second Congressional District',term:'May 19, 2021 to May 25, 2023\nMay 26, 2023 to Apr 4, 2031'},
 {id:'jennifer-callahan',name:'Ms. Jennifer Callahan',image:'p2-2',position:'Position 3: At-Large Appointment',term:'July 15, 2024 to April 4, 2032'},
 {id:'tracy-poole',name:'Mr. Tracy Poole',image:'p2-10',position:'Position 4: First Congressional District',term:'May 27, 2025 to April 4, 2033'},
 {id:'chris-franklin',name:'Mr. Chris Franklin',image:'p2-14',position:'Position 5: Fifth Congressional District',term:'May 29, 2024 to Apr 4, 2026'},
 {id:'joe-hall',name:'Mr. Joe D. Hall',image:'p2-11',position:'Position 6: At-Large Appointment',term:'Apr 16, 2003 to Apr 4, 2011\nApr 5, 2011 to Apr 4, 2019\nApr 5, 2019 to Apr 4, 2027'},
 {id:'jimmy-harrel',name:'Mr. Jimmy Harrel',image:'p2-9',position:'Position 7: Third Congressional District',term:'May 6, 2020 to Apr 4, 2028'},
 {id:'rick-walker',name:'Mr. Rick Walker',image:'p2-5',position:'Position 8: Chair, Fourth Congressional District',term:'May 19, 2021 to Apr 4, 2029'},
 {id:'blayne-arthur',name:'Mrs. Blayne Arthur',image:'p2-12',position:'Position 9: President of the State Board of Agriculture',term:'Jan 14, 2019 - Coterminous with the Governor'}
];
const meetings=[
 {day:'4',month:'Dec',year:'2026',date:'2026-12-04',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University'},
 {day:'19',month:'Jan',year:'2027',date:'2027-01-19',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Hamm Institute for American Energy at OSU'},
 {day:'5',month:'Mar',year:'2027',date:'2027-03-05',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University'},
 {day:'23',month:'April',year:'2027',date:'2027-04-23',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University'},
 {day:'11',month:'June',year:'2027',date:'2027-06-11',title:'Regular Board Meeting',time:'10:00 a.m.',place:'OSU-Tulsa'},
 {day:'10',month:'Sept',year:'2027',date:'2027-09-10',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University'},
 {day:'22',month:'Oct',year:'2027',date:'2027-10-22',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University'},
 {day:'3',month:'Dec',year:'2027',date:'2027-12-03',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University'}
];
const meetingExample={day:'6',month:'Mar',year:'2026',date:'2026-03-06',title:'Regular Board Meeting',time:'10:00 a.m.',place:'Oklahoma State University',address:['Council Room, 412 Student Union','Stillwater, Oklahoma']};
const previousMeetings=[
 {day:'22',month:'April',date:'2026-04-22',title:'Special Board Meeting',time:'1:30 PM',place:'Hamm Institute for American Energy at OSU'},
 {day:'24',month:'April',date:'2026-04-24',title:'Regular Board Meeting',time:'10:00 AM',place:'Northeastern Oklahoma A&M College'},
 {day:'12',month:'June',date:'2026-06-12',title:'Regular Board Meeting',time:'10:00 AM',place:'Hamm Institute for American Energy at OSU'},
 {day:'11',month:'Sept',date:'2026-09-11',title:'Regular Board Meeting',time:'10:00 AM',place:'Hamm Institute for American Energy at OSU'}
];
// Sample archive snapshot from regents.okstate.edu/minutes, retrieved November 18, 2026.
const minutesArchive=[
  {
    "date": "2026-10-23",
    "day": "23",
    "month": "Oct",
    "year": "2026",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "OSU Institute of Technology",
      "State Room, Culinary Arts Building",
      "Okmulgee, Oklahoma"
    ],
    "documents": [
      {
        "label": "Meeting Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/TarTyP3AFlz2TGBVQpMplzV9tpbffTBpk2cPS5trHSoA"
      },
      {
        "label": "Reception & Dinner Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/u0OGwaOTLt7uI21Nq1xtVyS7wwO0EtkTD2FCHRliHcYA"
      },
      {
        "label": "Breakfast & Lunch Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/oLJxgF6%2FD4C4XiQWTqQVciq4O0egC7e7nha6PUv09HgA"
      },
      {
        "label": "Minutes information",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/info_regarding_oct2026_reg_brd_mtg_mins.pdf"
      }
    ]
  },
  {
    "date": "2026-09-11",
    "day": "11",
    "month": "Sept",
    "year": "2026",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Oklahoma State University",
      "Council Room, 412 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Meeting Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/U1q9AJBRhcEAN0oJft8LXpRvNlim%2F52hIIoo596igEYA"
      },
      {
        "label": "Reception & Dinner Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/d7DJWeyfrPgo1P62wOGZhGqgt29vMUPdD5Z82idPdqkA"
      },
      {
        "label": "Breakfast & Lunch Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/I5ap1zcAZnAotr5utbBv2HvWi6XJLrWJipXBxb3HmucA"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-09-11_regular_brd_mtg_mins.pdf"
      }
    ]
  },
  {
    "date": "2026-08-28",
    "day": "28",
    "month": "Aug",
    "year": "2026",
    "title": "Special Board Meeting",
    "time": "8:30 AM",
    "location": [
      "Oklahoma State University",
      "University House",
      "1600 N. Washington St.",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Meeting Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/R7Mb61cuDqDVyq9R6dvh1x7O4LTmUp1AxKQ7p6jMrHAA"
      },
      {
        "label": "Reception & Dinner Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/0WgxoedymxckCFNbeyHVqfussPhOeBXy1CxZe7H0izUA"
      },
      {
        "label": "Minutes information",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2026/info_regarding_aug2026_spec_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2026-06-12",
    "day": "12",
    "month": "June",
    "year": "2026",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Hamm Institute for American Energy at OSU",
      "300 NE 9th Street",
      "Oklahoma City, Oklahoma"
    ],
    "documents": [
      {
        "label": "Meeting Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/oTcg5wgHE4KgXQKUu%2FLiA0rIxzYWlxk%2FsY6N25EaQGEA"
      },
      {
        "label": "Finance Committee Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/0FX1AIQBLOgKigvNG8dIsaFt6X8QYYmrijfifnccnAwA"
      },
      {
        "label": "Reception & Dinner Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/P3HxnEkO3juw0c8NKyTy84pgr8KgoL66oeU8mnw%2FgJ4A"
      },
      {
        "label": "Breakfast & Lunch Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/zpfDO8EPrM9s9HuBqrAJoginamJwtRU7539dHdGnwZ0A"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-06-12-regular-board-meeting-minutes_reduced-size.pdf"
      }
    ]
  },
  {
    "date": "2026-05-28",
    "day": "28",
    "month": "May",
    "year": "2026",
    "title": "Special Board Meeting",
    "time": "9:00 AM",
    "location": [
      "Hamm Institute for American Energy at OSU",
      "Board Room, 5th Floor",
      "300 NE 9th Street",
      "Oklahoma City, Oklahoma"
    ],
    "documents": [
      {
        "label": "Meeting Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/6fQItoQ1fCkzglJW31LopQcbCm28FJmpEI0ObEJNXtQA"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2026/2026-05-28_special_brd_mtg_mins_amended.pdf"
      }
    ]
  },
  {
    "date": "2026-04-24",
    "day": "24",
    "month": "April",
    "year": "2026",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Northeastern Oklahoma A&M College",
      "Calcagno Family Ballroom, Student Union",
      "Miami, Oklahoma"
    ],
    "documents": [
      {
        "label": "Meeting Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/UBChsxHnTV0KbtkUyt0tsdE1akcA0rupPhDdp24MpVAA"
      },
      {
        "label": "Reception & Dinner Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/KxEWph1J2fyuLNi6Ej%2FNND4HXipmx8EcOxEudmvjzCEA"
      },
      {
        "label": "Breakfast & Lunch Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/eK9wcspD8U57vYIFGbt2GU%2FZM48oH6qbPmo8mnSNQioA"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-04-24-Regular-Board-Meeting-Minutes.pdf"
      }
    ]
  },
  {
    "date": "2026-04-22",
    "day": "22",
    "month": "April",
    "year": "2026",
    "title": "Special Board Meeting",
    "time": "1:30 PM",
    "location": [
      "Hamm Institute for American Energy at OSU",
      "Board Room, 5th Floor",
      "300 NE 9th Street",
      "Oklahoma City, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://public.onboardmeetings.com/Meeting/CBQakxzHQyjPUU%2FRYYR%2F7eyg3gaztXJ1ckFVkkfDnpEA/uJvJwIP0fRHpmkTvcUNXtB0XvUp8XywWZI8TyZqkO3cA"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2026/2026-04-22-Special-Board-Meeting-Minutes.pdf"
      }
    ]
  },
  {
    "date": "2026-03-06",
    "day": "6",
    "month": "Mar",
    "year": "2026",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Oklahoma State University",
      "Council Room, 412 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-03-06_regular_board_meeting_agenda.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-03-06_related_agendas.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-03-06-Regular-Board-Meeting-Minutes.pdf"
      }
    ]
  },
  {
    "date": "2026-03-06",
    "day": "6",
    "month": "Mar",
    "year": "2026",
    "title": "Special Board Meeting",
    "time": "7:30 AM",
    "location": [
      "Oklahoma State University",
      "Suite 1600, 297 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-03-06_special_brd_mtg_agenda.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2026/2026-03-06-Special-Board-Meeting-Minutes.pdf"
      }
    ]
  },
  {
    "date": "2026-01-30",
    "day": "30",
    "month": "Jan",
    "year": "2026",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "OSU-Center for Health Sciences",
      "A.R. and Marylouise Tandy Building, 1111 W. 17th St.",
      "Tandy Conference Room, 4th Floor",
      "Tulsa, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-01-30_regular_board_meeting_agenda.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2026/2026-01-30_reg_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-12-05",
    "day": "5",
    "month": "Dec",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Oklahoma State University",
      "Council Room, 412 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-12-05_regular_brd_mtg_agenda_combined.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-12-05_related_agendas.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-12-05_regular_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-10-24",
    "day": "24",
    "month": "Oct",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Connors State College",
      "Regents Room, A.D. Stone Student Union",
      "Warner, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-10-24_reg_bd_mtg_agenda_packet.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-10-24_related_agendas.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-10-24_regular_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-09-12",
    "day": "12",
    "month": "Sept",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Langston University",
      "Multipurpose Room, 142 School of Physical Therapy",
      "Langston, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-09-12_regular_board_meeting_agenda_website_full.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-09-12_related_agendas.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-09-12_regular_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-08-22",
    "day": "22",
    "month": "Aug",
    "year": "2025",
    "title": "Special Board Meeting",
    "time": "8:00 AM",
    "location": [
      "Oklahoma State University",
      "University House",
      "1600 N. Washington Street",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2025/2025-08-21and22_brd_retreat_study_session_agenda.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2025/2025-08-22_brd_retreat_study_session_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-06-13",
    "day": "13",
    "month": "June",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "OSU-Oklahoma City",
      "Conference North, 3rd Floor Student Center",
      "900 N. Portland Avenue",
      "Oklahoma City, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-06-13_regular_board_meeting_agenda_combined.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-06-12_combined_related_agendas_and_reference_docs.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-06-13_regular_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-06-03",
    "day": "3",
    "month": "June",
    "year": "2025",
    "title": "Special Board Meeting",
    "time": "10:00 AM",
    "location": [
      "OSU-Oklahoma City",
      "Conference Room 304, 3rd Floor Student Center",
      "900 N. Portland Avenue",
      "Oklahoma City, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2025/2025-06-03_special_board_mtg_agenda.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2025/2025-06-03_special_brd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-04-25",
    "day": "25",
    "month": "April",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Oklahoma Panhandle State University",
      "Ballroom, Student Union",
      "Goodwell, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-04-25_regular_brd_mtg_agenda_combined.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-04-25_related_agendas_r.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-04-25-Regular-Board-Meeting-Minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-03-07",
    "day": "7",
    "month": "Mar",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Oklahoma State University",
      "Council Room, 412 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-03-07_regular_bd_mtg_agenda.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-03-07_related_agendas.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-03-07_reg_bd_mtg_minutes.pdf"
      }
    ]
  },
  {
    "date": "2025-02-07",
    "day": "7",
    "month": "Feb",
    "year": "2025",
    "title": "Special Board Meeting",
    "time": "9:00 AM",
    "location": [
      "Oklahoma State University",
      "Regency Room, 460 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2025/2025-02-07_special_board_mtg_agenda.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/special-meetings/2025/2025-02-07_special_brd_mtg_minutes2.pdf"
      }
    ]
  },
  {
    "date": "2025-01-31",
    "day": "31",
    "month": "Jan",
    "year": "2025",
    "title": "Regular Board Meeting",
    "time": "10:00 AM",
    "location": [
      "Oklahoma State University",
      "Council Room, 412 Student Union",
      "Stillwater, Oklahoma"
    ],
    "documents": [
      {
        "label": "Agenda",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-01-31_regular_bd_mtg_agenda.pdf"
      },
      {
        "label": "Related Agendas",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-01-31_related_agendas.pdf"
      },
      {
        "label": "Minutes",
        "url": "https://regents.okstate.edu/site-files/docs/meetings/2025/2025-01-31_regular_brd_mtg_minutes.pdf"
      }
    ]
  }
];
const minuteMeetingKey=meeting=>meeting.date+'-'+meeting.time.replace(/[^a-z0-9]/gi,'');
const institutions=[['Connors State College','logos/connors-state-black.svg','https://connorsstate.edu/'],['Langston University','logos/langston-black.png','https://langston.edu/'],['NEO A&M College','logos/neo-black.svg','https://neo.edu/'],['Oklahoma Panhandle State University','logos/opsu-black.svg','https://opsu.edu/'],['Oklahoma State University','logos/osu-black.svg','https://okstate.edu/']];
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const params=new URLSearchParams(location.search), page=params.get('page')||'home';
const footerOptions = [
  { id: '1', name: 'Blue frame', description: 'A white logo band enclosed by a blue border.' },
  { id: '2', name: 'Light-gray frame', description: 'The same white logo band with a softer gray border.' },
  { id: '3', name: 'Individual logo tiles', description: 'Separate white logo tiles on a light-gray background.' }
];
const colorInstitutionLogos = ['connors-state-color.svg','langston-color.png','neo-color.svg','opsu-color.svg','osu-color.svg'];
const institutionLockup = (option, id = 'institutions-title', heading = 'h2') => `<section class="footer-lockup footer-lockup--${option}" aria-labelledby="${heading === 'h3' ? `option-${option} ${id}` : id}"><div class="footer-lockup__inner"><${heading} id="${id}" class="footer-lockup__heading">Oklahoma A&amp;M Institutions</${heading}><div class="footer-lockup__logos">${institutions.map(([name,,url],index)=>`<a href="${url}" aria-label="${name}"><img src="assets/logos/${colorInstitutionLogos[index]}" alt="${name}" loading="lazy"></a>`).join('')}</div></div></section>`;
const selectedFooter = footerOptions.find(option => option.id === params.get('footer')) || footerOptions.find(option => option.id === '2');

const href=(p,extra='')=>`?page=${p}${extra}`;
const nav=[['About Us','members'],['Upcoming Meetings','meetings'],['Minutes','minutes'],['Policy Manual','policy'],['Staff','staff'],['Contact Us','contact']];
// Match the live site's navigation; use the existing local member-directory mockup.
const submenus={
 members:[['Board Members','?page=members'],['Mission Statement','https://regents.okstate.edu/mission-statement'],['Committees','https://regents.okstate.edu/committees'],['Councils','https://regents.okstate.edu/councils']],
 staff:[['Executive/Administrative','https://regents.okstate.edu/staff/exec-office-staff'],['Office of Internal Audit','https://regents.okstate.edu/staff/internal-audit-staff'],['Office of Legal Counsel','https://regents.okstate.edu/staff/legal-counsel-staff'],['Employment Opportunities','https://regents.okstate.edu/employment-opportunities']]
};
const navItem=([label,p])=>{
 const active=page===p||(p==='members'&&page==='member')||(p==='meetings'&&page==='meeting'&&!params.has('archive'))||(p==='minutes'&&page==='meeting'&&params.has('archive'));
 if(submenus[p])return `<li class="nav-item dropdown"><button class="nav-link dropdown-toggle ${active?'active':''}" id="${p}-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" aria-controls="${p}-submenu">${label}</button><ul class="dropdown-menu" id="${p}-submenu" aria-labelledby="${p}-toggle">${submenus[p].map(([text,url])=>`<li><a class="dropdown-item" href="${url}" ${url==='?page='+page?'aria-current="page"':''}>${text}</a></li>`).join('')}</ul></li>`;
 return `<li class="nav-item"><a class="nav-link ${active?'active':''}" ${page===p?'aria-current="page"':''} href="${href(p)}">${label}</a></li>`;
};

document.querySelector('#header').innerHTML=`<div class="masthead"><div class="regents-container"><div class="brand-row"><div class="brand"><a class="brand-logo" href="./" aria-label="Board of Regents home"><img src="assets/p1-6.png" alt="Oklahoma A&M Board of Regents seal"></a><a class="brand-title" href="./"><strong>BOARD OF REGENTS</strong> for the<br>Oklahoma Agricultural &amp; Mechanical Colleges</a></div><form class="site-search desktop-search" action="" role="search"><input type="hidden" name="page" value="search"><label class="visually-hidden" for="site-query">Search the website</label><input class="form-control" type="search" id="site-query" name="q" placeholder="Search..." value="${esc(params.get('q')||'')}"><button class="search-button" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="4"/><path d="m15 15 7 7" stroke="currentColor" stroke-width="4"/></svg></button></form></div><nav class="navbar navbar-expand-lg" aria-label="Main navigation"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Main menu"><span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span></button><div class="collapse navbar-collapse" id="main-nav"><ul class="navbar-nav">${nav.map(navItem).join('')}</ul><form class="site-search mobile-search" action="" role="search"><input type="hidden" name="page" value="search"><label class="visually-hidden" for="mobile-site-query">Search the website</label><input class="form-control" type="search" id="mobile-site-query" name="q" placeholder="Search..." value="${esc(params.get('q')||'')}"><button class="search-button" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="4"/><path d="m15 15 7 7" stroke="currentColor" stroke-width="4"/></svg></button></form></div></nav></div></div>`;
const institutionContent=institutionLockup(selectedFooter.id);
document.querySelector('#footer').innerHTML=`<div class="footer dashboard-footer"><div class="regents-container"><div class="row"><div class="col-md-4"><h2>OSU/ A&amp;M REGENTS</h2><address>900 N. PORTLAND AVENUE<br>OKLAHOMA CITY, OK 73107<br>PH: <a href="tel:+14059453263">405-945-3263</a><br>FAX: 405-945-3345<br>EMAIL: <a href="mailto:board@okstate.edu">BOARD@OKSTATE.EDU</a></address></div><div class="col-md-4"><h2>INSTITUTIONS</h2><ul class="footer-links"><li><a href="https://okstate.edu/">OSU - Stillwater</a></li><li><a href="https://osuokc.edu/">OSU - Oklahoma City</a></li><li><a href="https://tulsa.okstate.edu/">OSU - Tulsa</a></li><li><a href="https://medicine.okstate.edu/">OSU Center for Health Sciences</a></li><li><a href="https://osuit.edu/">OSU Institute of Technology</a></li></ul></div><div class="col-md-4"><h2 class="visually-hidden">More institutions</h2><ul class="footer-links pt-md-4">${institutions.slice(0,4).map(([name,,url])=>`<li><a href="${url}">${name}</a></li>`).join('')}</ul></div></div><div class="footer-bottom">© 2026 &nbsp; | &nbsp; ALL RIGHTS RESERVED<br>BOARD OF REGENTS FOR THE OKLAHOMA AGRICULTURAL AND MECHANICAL COLLEGES<br><a href="?page=ethics">ETHICS POINT</a><span class="footer-divider" aria-hidden="true"> · </span><a href="?page=accessibility">ACCESSIBILITY &amp; HELP</a></div></div></div>`;
const crumb=label=>`<nav class="breadcrumb-band" aria-label="Breadcrumb"><ol class="regents-container breadcrumb-list"><li><a href="./">Home</a></li>${page==='member'?'<li><a href="?page=members">Regents Members</a></li>':''}<li aria-current="page">${esc(page==='member'?(members.find(m=>m.id===params.get('id'))?.name||label):label)}</li></ol></nav>`;
const meetingDate=m=>`<time class="meeting-date" datetime="${m.date}"><span class="meeting-date__day">${m.day}</span><span class="meeting-date__month">${m.month}<br>${m.year||m.date.slice(0,4)}</span></time>`;
const meetingRequest=(m,document='')=>`mailto:board@okstate.edu?subject=${encodeURIComponent(`${document||'Meeting information'} — ${m.month} ${m.day}, ${m.year||m.date.slice(0,4)}`)}`;
const meetingCard=m=>`<article class="events__item meeting-card"><div class="events__content-wrapper">${meetingDate(m)}<h3 class="events__heading"><a class="events__heading-link meeting-link" href="?page=meeting&amp;id=${m.date}">${m.title}<span class="visually-hidden"> on ${m.month} ${m.day}, ${m.year}</span></a></h3><p class="events__body">${m.time}<br>${m.place}</p></div></article>`;
const meetingRow=(m,i)=>`<li class="meeting-row">${meetingDate(m)}<div class="meeting-row__summary"><h2>${m.title}<span class="visually-hidden"> — ${m.month} ${m.day}, ${m.year}</span></h2><p>${m.time}<br>${m.place}</p></div><div class="meeting-row__actions"><a class="meeting-action" href="?page=meeting&amp;id=${m.date}">${i===0?'Meeting details':'Meeting details and documents'}<span class="visually-hidden"> — ${m.month} ${m.day}, ${m.year}</span></a><a class="meeting-action" href="${meetingRequest(m)}">Request information<span class="visually-hidden"> — ${m.month} ${m.day}, ${m.year}</span></a></div></li>`;

const news=[{id:'presidential-search',title:'Regents begin search for next president of Connors State College',body:'Guiding the future of the A&M system, the Board of Regents brings together leaders dedicated to advancing education, research and service across the state.',link:'Presidential search'},{id:'compliance',title:'74 O.S. § 3106.4 Website Posting Requirements for Public Entities',body:'In accordance with 74 O.S. § 3106.4, the Board of Regents provides required public information online to support transparency, accountability, and public access.',link:'Compliance details'}];
let content='';let title='Home';
if(page==='home'){
content=`<section class="banner" aria-labelledby="home-title"><div class="banner__wrapper"><div class="banner__img-wrapper"><img class="banner__img" src="assets/p1-5.png" alt="2025–2026 OSU/A&M Board of Regents members standing together"></div><div class="banner__content-wrapper"><h1 id="home-title">2025-2026 Members of the OSU/A&amp;M Board of Regents</h1><p>Guiding the future of the A&amp;M system, the Board of Regents brings together leaders dedicated to advancing education, research and service across the state.</p><p>From Left to Right: Billy G. Taylor, Member; Chris Franklin, Member; Jennifer Callahan, Member; Joe D. Hall, Member; Rick Walker, Chair; Cary Baetz, Vice Chair; Tracy Poole, Member; Blayne Arthur, Member; Jason Ramsey, Interim Chief Executive Officer</p><p>Not Pictured: Jimmy Harrel, Member</p><div class="banner__button-wrapper"><a class="banner__button" href="?page=members">Meet the members</a></div></div></div></section><section class="news" aria-labelledby="news-title" style="--news-item-per-row:2"><h2 id="news-title" class="component-title">News and Information</h2><div class="news__wrapper">${news.map(n=>`<article class="news__item"><div class="news__content-wrapper"><div class="news__body-wrapper"><h3 class="news__heading"><a class="news__heading-link" href="?page=${n.id}">${n.title}</a></h3><p class="news__body">${n.body}</p></div><a class="news__button" href="?page=${n.id}">${n.link}</a></div></article>`).join('')}</div></section><section class="events" aria-labelledby="meetings-title" style="--events-item-per-row:4"><h2 id="meetings-title" class="component-title">Upcoming Meetings</h2><div class="events__wrapper">${meetings.slice(0,4).map(meetingCard).join('')}</div><div class="all-meetings banner__button-wrapper"><a class="banner__button" href="?page=meetings">All upcoming</a></div></section>`;
}else if(page==='footer-options'){
title='Footer options';
content=crumb('Footer options')+`<section class="content-page regents-container footer-options-intro"><p class="component-eyebrow">Design review</p><h1>Three footer options</h1><p>Compare the three school-logo treatments below. Each uses the same five full-color school logos, in the same order, so you can focus on the background and framing.</p><nav class="footer-options-jump" aria-label="Footer options">${footerOptions.map(option=>`<a href="#option-${option.id}">Option ${option.id}: ${option.name}</a>`).join('')}</nav></section>${footerOptions.map(option=>`<section class="footer-option-review" aria-labelledby="option-${option.id}"><div class="regents-container footer-option-label"><p class="component-eyebrow">Option ${option.id}</p><h2 id="option-${option.id}">${option.name}</h2><p>${option.description}</p><a class="footer-option-home" href="index.html?footer=${option.id}#institutions-title">View option ${option.id} on the homepage <span aria-hidden="true">→</span></a></div>${institutionLockup(option.id,`option-${option.id}-institutions`,'h3')}</section>`).join('')}`;

}else if(page==='components'){
title='Regents kitchen sink';content=crumb('Component examples')+`<section class="content-page regents-container component-demo-intro"><p class="component-eyebrow">Component library</p><h1>Regents kitchen sink</h1><p>Explore the Regents components, their layout variants, and interactive examples. Use the links below to jump to a component. Text, images, and dates in these examples are sample content.</p></section><nav class="kitchen-jump regents-container" aria-label="Component examples"><a href="#demo-accordion">Accordion</a><a href="#demo-dialog">Dialog</a><a href="#demo-drawer">Bottom drawer</a><a href="#demo-banner">Banner: image on the left</a><a href="#demo-banner-sec">Banner: image on the right</a><a href="#demo-banner-bg">Banner: background image</a><a href="#demo-banner-txt">Banner: text only</a><a href="#demo-banner-txt-sec">Banner: text only on gray</a><a href="#demo-cards">Cards</a><a href="#demo-details">Expandable details</a><a href="#demo-events">Events</a><a href="#demo-features">Features: text only</a><a href="#demo-features-img">Features: with images</a><a href="#demo-image">Full image with caption</a><a href="#demo-image-txt">Image with text</a><a href="#demo-alert">In-page alert</a><a href="#demo-djafsdflj">Inset text</a><a href="#demo-links">Link list</a><a href="#demo-news">News cards</a><a href="#demo-phase">Phase banner</a><a href="#demo-quote">Pull quote with image</a><a href="#demo-gallery">Image gallery</a><a href="#demo-tabs">Tabs</a><a href="#demo-video-standard">Video banner</a><a href="#demo-video-secondary">Video banner: alternate</a><a href="#demo-video-inline">Full-width video</a><a href="#demo-typography">Typography and rich text</a></nav><section class="accordion" id="demo-accordion" aria-labelledby="accordion-title">
  <div class="component-inner">
    <p class="component-eyebrow">01 / Expand in place</p>
    <h2 id="accordion-title">Accordion</h2>
    <p>Reveal an answer without leaving the page. Each section opens independently.</p>
    <div data-accordion>
      <div class="accordion__item">
        <h3 class="accordion__heading"><button class="accordion__heading-button" id="accordion-purpose" aria-expanded="true" aria-controls="accordion-purpose-panel" type="button">When would I use an accordion?</button></h3>
        <div class="accordion__body" id="accordion-purpose-panel" role="region" aria-labelledby="accordion-purpose">
          <p>An accordion keeps related information together while letting visitors choose which details to read. It works well for frequently asked questions, meeting guidance, and supporting information.</p>
        </div>
      </div>
      <div class="accordion__item">
        <h3 class="accordion__heading"><button class="accordion__heading-button" id="accordion-keyboard" aria-expanded="true" aria-controls="accordion-keyboard-panel" type="button">Can I use the keyboard?</button></h3>
        <div class="accordion__body" id="accordion-keyboard-panel" role="region" aria-labelledby="accordion-keyboard">
          <p>Yes. Use Tab to reach a heading, then press Enter or Space to open or close its answer. Tab also reaches any links within an open section.</p>
          <p><a href="?page=accessibility">Read our accessibility information</a></p>
        </div>
      </div>
      <div class="accordion__item">
        <h3 class="accordion__heading"><button class="accordion__heading-button" id="accordion-multiple" aria-expanded="true" aria-controls="accordion-multiple-panel" type="button">Can more than one answer stay open?</button></h3>
        <div class="accordion__body" id="accordion-multiple-panel" role="region" aria-labelledby="accordion-multiple">
          <p>Yes. Open several sections to compare their contents, and close each one when you are finished.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="dialog regents-bg-gray" id="demo-dialog" aria-labelledby="dialog-example-title">
  <div class="component-inner">
    <p class="component-eyebrow">02 / Open a focused window</p>
    <h2 id="dialog-example-title">Dialog</h2>
    <p>A dialog appears over the page when a short message needs your attention.</p>
    <button class="dialog__button" type="button" data-modal-open="example-dialog" aria-controls="example-dialog" aria-haspopup="dialog" aria-expanded="false">Open dialog</button>
    <dialog class="dialog__modal" id="example-dialog" data-component-modal aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <button class="component-close" type="button" data-modal-close aria-label="Close dialog" autofocus><span aria-hidden="true">×</span></button>
      <p class="component-eyebrow">Dialog example</p>
      <h2 id="dialog-title">A moment of focus</h2>
      <p id="dialog-description">This window keeps a short message in focus while the page waits in the background.</p>
      <p>Close it with either button, press Escape, or select the shaded background. You will return to the button that opened it.</p>
      <button class="dialog__button" type="button" data-modal-close>Back to examples</button>
    </dialog>
  </div>
</section>
<section class="drawer" id="demo-drawer" aria-labelledby="drawer-example-title">
  <div class="component-inner">
    <p class="component-eyebrow">03 / Slide up for more</p>
    <h2 id="drawer-example-title">Drawer</h2>
    <p>A drawer slides up from the bottom to hold related information or useful links.</p>
    <button class="drawer__trigger-button" type="button" data-modal-open="example-drawer" aria-controls="example-drawer" aria-haspopup="dialog" aria-expanded="false">Open drawer</button>
    <dialog class="drawer-modal" id="example-drawer" data-component-modal aria-labelledby="drawer-title" aria-describedby="drawer-description">
      <button class="component-close" type="button" data-modal-close aria-label="Close drawer" autofocus><span aria-hidden="true">×</span></button>
      <p class="component-eyebrow">Drawer example</p>
      <h2 id="drawer-title">More to explore</h2>
      <p id="drawer-description">Keep supporting information close at hand in a panel that opens from the bottom of the page.</p>
      <h3>Explore the Regents site</h3>
      <ul class="component-drawer-links">
        <li><a href="?page=members">Meet the Regents</a></li>
        <li><a href="?page=meetings">View the meeting reference</a></li>
        <li><a href="?page=contact">Contact the Board</a></li>
      </ul>
      <p>Press Escape or use a close button to return to the examples.</p>
      <button class="dialog__button" type="button" data-modal-close>Close panel</button>
    </dialog>
  </div>
</section>
<div class="kitchen-example" id="demo-banner"><div class="regents-container kitchen-example-label"><h2>Banner: image on the left</h2></div><section class="banner" id="banner__060c8175-743d-47d8-828b-2ae8ba70470a">
            <div class="banner__wrapper banner__wrapper--left-side">
                <div class="banner__img-wrapper">
                    <img class="banner__img" src="assets/components/campus-11.jpg" alt="Photo of the Nancy Randolph Davis statue." loading="lazy" />
                </div>
                <div class="banner__content-wrapper">
                    <div>
						<h3>Header of tile</h3>
						<h3>Optional subhead</h3>
						<p>This is the content field. It's a light wysiwyg field.</p></div>

                    <div class="banner__button-wrapper">
                        <a href="?page=contact" draggable="false" class="banner__button" target="_self">Banner Link 1</a>
                        <a href="https://okstate.edu" draggable="false" class="banner__button banner__button--secondary" target="_self">Optional Button Link 2</a>
                    </div>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-banner-sec"><div class="regents-container kitchen-example-label"><h2>Banner: image on the right</h2></div><section class="banner banner--secondary" id="banner-sec__f617a204-7d1c-4a0b-a7fe-d7a5e70b6048">
            <div class="banner__wrapper banner__wrapper--right-side">
                <div class="banner__img-wrapper">
                    <img class="banner__img" src="assets/components/campus-9.jpg" alt="Student in the community kitchen at Griffith community center" loading="lazy" />
                </div>
                <div class="banner__content-wrapper">
                    <div><p>Banner (secondary color pattern) component. This is the content field.<br /></p></div>

                    <div class="banner__button-wrapper">
                        <a href="?page=contact" draggable="false" class="banner__button" target="_self">Banner Link 1 (optional)</a>
                        <a href="?page=contact" draggable="false" class="banner__button banner__button--secondary" target="_self">Contact the Board</a>
                    </div>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-banner-bg"><div class="regents-container kitchen-example-label"><h2>Banner: background image</h2></div><section class="banner banner--background banner--opacity" id="banner-bg__81a5eb21-d831-4ff8-9aad-28f59bf0506f" style="--banner-bi-bg-image: url(assets/components/campus-12.jpg)">
            <div class="banner__wrapper banner__wrapper--align-left">
                <div class="banner__content-wrapper">
                    <div><p>Banner with background image<br /></p></div>

                    <div class="banner__button-wrapper">
                        <a href="?page=contact" draggable="false" class="banner__button" target="_self">Banner Link 1 (optional)</a>
                        <a href="https://okstate.edu" draggable="false" class="banner__button banner__button--secondary" target="_self">Banner link 2 (optional)</a>
                    </div>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-banner-txt"><div class="regents-container kitchen-example-label"><h2>Banner: text only</h2></div><section class="banner banner--text-only" id="banner-txt__f0bedb6c-570b-4808-a0a4-70de2eab5f15">
            <div class="banner__wrapper banner__wrapper--align-center">
                <div class="banner__content-wrapper">
                    <div><p>Banner with text only (primary color option) - content field<br /></p></div>

                    <div class="banner__button-wrapper">
                        <a href="?page=contact" draggable="false" class="banner__button" target="_self">Banner Link 1 (optional)</a>
                        <a href="?page=contact" draggable="false" class="banner__button banner__button--secondary" target="_self">Banner Link 2 (optional)</a>
                    </div>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-banner-txt-sec"><div class="regents-container kitchen-example-label"><h2>Banner: text only on gray</h2></div><section class="banner banner--secondary banner--text-only" id="banner-txt-sec__5f01f907-af30-4fba-963c-c4a4f1e4f285">
            <div class="banner__wrapper banner__wrapper--align-left">
                <div class="banner__content-wrapper">
                    <div><p>Banner with text only (secondary color option)<br /></p></div>

                    <div class="banner__button-wrapper">
                        <a href="?page=contact" draggable="false" class="banner__button" target="_self">Banner Link 1 (optional)</a>
                        <a href="?page=contact" draggable="false" class="banner__button banner__button--secondary" target="_self">Banner Link 2 (optional)</a>
                    </div>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-cards"><div class="regents-container kitchen-example-label"><h2>Cards</h2></div><section class="cards" id="cards__79deb2f6-0e01-428c-a18d-66a0fbe7f567" style="--cards-item-per-row: 3">
            <ul class="cards__wrapper">

                <li class="cards__item">
                    <div class="cards__img-wrapper"><img class="cards__img" src="assets/components/campus-8.jpg" alt="Students outside of Griffith Community Center on their laptops" loading="lazy" /></div>
                    <div class="cards__content-wrapper">
                        <div class="cards__body-wrapper">
                            <h3 class="cards__heading"><a href="?page=contact" class="cards__heading-link" target="_self">Card listing</a></h3>
                            <div class="cards__body">Card 1 description</div>
                            <ul aria-label="Card categories" class="cards__categories">
                                        <li class="cards__categories-item">category 1 (optional)</li><li class="cards__categories-item">category 2 (optional)</li>
                          </ul>
                        </div>

                                <a class="cards__button" href="?page=contact">
                                    Card Link

                                </a>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="cards__img-wrapper"><img class="cards__img" src="assets/components/campus-10.jpg" alt="Stillwater, OK
July 15, 2026" loading="lazy" /></div>
                    <div class="cards__content-wrapper">
                        <div class="cards__body-wrapper">
                            <h3 class="cards__heading"><a href="?page=contact" class="cards__heading-link" target="_self">Card 2</a></h3>
                            <div class="cards__body">Card 2 description</div>
                            <ul aria-label="Card categories" class="cards__categories">
                                        <li class="cards__categories-item">another optional category</li>
                          </ul>
                        </div>

                                <a class="cards__button" href="?page=contact">
                                    Card link

                                </a>
                    </div>
                </li>
				 <li class="cards__item">
                    <div class="cards__img-wrapper"><img class="cards__img" src="assets/components/campus-10.jpg" alt="Stillwater, OK
July 15, 2026" loading="lazy" /></div>
                    <div class="cards__content-wrapper">
                        <div class="cards__body-wrapper">
                            <h3 class="cards__heading"><a href="?page=contact" class="cards__heading-link" target="_self">Card 3</a></h3>
                            <div class="cards__body">Card 2 description</div>
                            <ul aria-label="Card categories" class="cards__categories">
                                        <li class="cards__categories-item">another optional category</li>
                          </ul>
                        </div>

                                <a class="cards__button" href="?page=contact">
                                    Card link

                                </a>
                    </div>
                </li>
				 <li class="cards__item">
                    <div class="cards__img-wrapper"><img class="cards__img" src="assets/components/campus-10.jpg" alt="Stillwater, OK
July 15, 2026" loading="lazy" /></div>
                    <div class="cards__content-wrapper">
                        <div class="cards__body-wrapper">
                            <h3 class="cards__heading"><a href="?page=contact" class="cards__heading-link" target="_self">Card 4</a></h3>
                            <div class="cards__body">Card 2 description</div>
                            <ul aria-label="Card categories" class="cards__categories">
                                        <li class="cards__categories-item">another optional category</li>
                          </ul>
                        </div>

                                <a class="cards__button" href="?page=contact">
                                    Card link

                                </a>
                    </div>
                </li>
				 <li class="cards__item">
                    <div class="cards__img-wrapper"><img class="cards__img" src="assets/components/campus-10.jpg" alt="Stillwater, OK
July 15, 2026" loading="lazy" /></div>
                    <div class="cards__content-wrapper">
                        <div class="cards__body-wrapper">
                            <h3 class="cards__heading"><a href="?page=contact" class="cards__heading-link" target="_self">Card 5</a></h3>
                            <div class="cards__body">Card 2 description</div>
                            <ul aria-label="Card categories" class="cards__categories">
                                        <li class="cards__categories-item">another optional category</li>
                          </ul>
                        </div>

                                <a class="cards__button" href="?page=contact">
                                    Card link

                                </a>
                    </div>
                </li>
				 <li class="cards__item">
                    <div class="cards__img-wrapper"><img class="cards__img" src="assets/components/campus-10.jpg" alt="Stillwater, OK
July 15, 2026" loading="lazy" /></div>
                    <div class="cards__content-wrapper">
                        <div class="cards__body-wrapper">
                            <h3 class="cards__heading"><a href="?page=contact" class="cards__heading-link" target="_self">Card 6</a></h3>
                            <div class="cards__body">Card 2 description</div>
                            <ul aria-label="Card categories" class="cards__categories">
                                        <li class="cards__categories-item">another optional category</li>
                          </ul>
                        </div>

                                <a class="cards__button" href="?page=contact">
                                    Card link

                                </a>
                    </div>
                </li>
            </ul>
        </section></div><div class="kitchen-example" id="demo-details"><div class="regents-container kitchen-example-label"><h2>Expandable details</h2></div><details class="details" open id="details__c72da8e1-cff1-493d-9652-8f0f31c8831a">
            <summary class="details__title">
                <span class="details__icon">Details component</span>
            </summary>
            <div class="details__content">
                <p>Hello some content goes in here. it's a mini wysiwyg. Down below there's an checkbox to expand this by default. <br /></p>
            </div>
        </details></div><div class="kitchen-example" id="demo-events"><div class="regents-container kitchen-example-label"><h2>Events</h2></div><section class="events" id="events__4e4e7f6e-da89-41e9-b634-81b80b0819ea" style="--events-item-per-row: 3">
            <ul class="events__wrapper">

                <li class="events__item">
                    <div class="events__img-wrapper"><img class="events__img" src="assets/components/campus-2.jpg" alt="Two students playing with a frisbee on the commons lawn" loading="lazy" /></div>
                    <div class="events__content-wrapper">
                        <div class="events__body-wrapper">
                            <h3 class="events__heading"><a href="?page=contact" class="events__heading-link" target="_self">Event Title</a></h3>
                            <div class="events__date-wrapper">
                                <div class="events__date">
                                    <span class="events__date-label">July 25th</span>
                                </div>

                                <div class="events__time">
                                    <span class="events__date-label">4:00 P.M.</span>
                                </div>

                            </div>
                            <div class="events__body">Event Description</div>

                            <ul aria-label="Event categories" class="events__categories">
                                <li class="events__categories-item">Category</li><li class="events__categories-item">Category 2</li>
                            </ul>
                        </div>

                        <a href="?page=meetings" class="events__button">
                            View upcoming meetings</a>
                    </div>
                </li>
            </ul>
        </section></div><div class="kitchen-example" id="demo-features"><div class="regents-container kitchen-example-label"><h2>Features: text only</h2></div><section class="features" id="features__d5467df5-710d-462d-88ae-fc79c6b27133" style="--features-item-width-desktop: calc(33.33% - 0.834rem);">
                <ul class="features__list">

                            <li class="features__item">
                                <div class="features__item__content">
                                    <h3 class="features__item__title">Feature 1</h3>
                                    <div class="features__item__description">Feature description</div>
                                    <a href="?page=contact" draggable="false" class="features__item__call-to-action" target="_self">Feature link text</a>
                                </div>
                            </li>

                            <li class="features__item">
                                <div class="features__item__content">
                                    <h3 class="features__item__title">Feature 2</h3>
                                    <div class="features__item__description">Feature description</div>
                                    <a href="?page=contact" draggable="false" class="features__item__call-to-action" target="_self">Feature 2 lInk</a>
                                </div>
                            </li>

                            <li class="features__item">
                                <div class="features__item__content">
                                    <h3 class="features__item__title">Feature 3</h3>
                                    <div class="features__item__description">FEature description</div>
                                    <a href="?page=contact" draggable="false" class="features__item__call-to-action" target="_self">Feature 3 Link</a>
                                </div>
                            </li>

                </ul>
            </section></div><div class="kitchen-example" id="demo-features-img"><div class="regents-container kitchen-example-label"><h2>Features: with images</h2></div><section class="features" id="features-img__0aea3af6-2620-408d-a40b-6ed0901d5f9a" style="--features-item-width-desktop: calc(33.33% - 0.834rem);">
                <ul class="features__list">

                            <li class="features__item">
                                <div class="features__icon__wrapper">
                                    <img class="features__icon" src="assets/components/campus-1.jpg" alt="Feature w/ image 1" loading="lazy" />
                                </div>
                                <div class="features__item__content">
                                    <h3 class="features__item__title">Feature w/ image 1</h3>
                                    <div class="features__item__description">Feature description</div>
                                    <a href="?page=contact" draggable="false" class="features__item__call-to-action" target="_self">feature link 1</a>
                                </div>
                            </li>

                            <li class="features__item">
                                <div class="features__icon__wrapper">
                                    <img class="features__icon" src="assets/components/campus-5.jpg" alt="Feature w/ image 2" loading="lazy" />
                                </div>
                                <div class="features__item__content">
                                    <h3 class="features__item__title">Feature w/ image 2</h3>
                                    <div class="features__item__description">feature description</div>
                                    <a href="?page=contact" draggable="false" class="features__item__call-to-action" target="_self">Feature link 2</a>
                                </div>
                            </li>

                            <li class="features__item">
                                <div class="features__icon__wrapper">
                                    <img class="features__icon" src="assets/components/campus-7.jpg" alt="Feature 3 with image" loading="lazy" />
                                </div>
                                <div class="features__item__content">
                                    <h3 class="features__item__title">Feature 3 with image</h3>
                                    <div class="features__item__description">I am feature 3's description</div>
                                    <a href="https://union.okstate.edu" draggable="false" class="features__item__call-to-action" target="_self">Student Union</a>
                                </div>
                            </li>

                </ul>
            </section></div><div class="kitchen-example" id="demo-image"><div class="regents-container kitchen-example-label"><h2>Full image with caption</h2></div><section class="image image--full" id="image__edc786f5-0309-4b38-ba95-a467183c06cb">
            <figure class="image__wrapper">
                <img class="image__img" src="assets/components/campus-5.jpg" alt="Students on the Oklahoma State University campus" loading="lazy" />
                <figcaption class="image__img-caption">
                    <p>This is my image caption<br /></p>
                </figcaption>
            </figure>
        </section></div><div class="kitchen-example" id="demo-image-txt"><div class="regents-container kitchen-example-label"><h2>Image with text</h2></div><section class="image" id="image-txt__cb81c784-d213-4c35-a68e-2b7a7ed52e54">
            <div class="image__wrapper image__wrapper--left-side">
                <div class="image__img-wrapper">
                    <img class="image__img" src="assets/components/campus-1.jpg" alt="Oklahoma State University campus scene" loading="lazy" />

                    <div class="image__img-caption"><p>My image Caption<br /></p></div>

                </div>
                <div class="image__img-description">
                    <p>Rich text content area<br /></p><h3>I can add headings<br /></h3><div><br /></div><p>And stuff<br /></p>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-alert"><div class="regents-container kitchen-example-label"><h2>In-page alert</h2></div><section class="alert-in-page alert-in-page--info" id="alert__aa7b4abd-aa71-42af-8738-29aabedb5e59" role="note">
            <div class="alert-in-page__wrapper">
                <div class="alert-in-page__text-content">
                    <p>In page alert content area. <a href="?page=contact">Supports links</a><br /></p>
                </div>
                <a href="?page=contact" draggable="false" class="alert-in-page__button" target="_self">Alert Link</a>
            </div>
        </section></div><div class="kitchen-example" id="demo-djafsdflj"><div class="regents-container kitchen-example-label"><h2>Inset text</h2></div><section class="inset_text" id="djafsdflj">
            <div class="inset_text__body">
                <p> This component is called inset text. It has a rich text box and that's it. Looks kind of like a blockquote.<br /></p>
            </div>
        </section></div><div class="kitchen-example" id="demo-links"><div class="regents-container kitchen-example-label"><h2>Link list</h2></div><section class="links" id="links__2cd778b8-6f72-4436-b12b-57eb6cc8b524">
            <ul class="links__wrapper">

                <li class="links__item">
                    <a href="?page=contact" class="links__button" target="_self">
                        Link List Link 1
                    </a>
                </li>
                <li class="links__item">
                    <a href="?page=contact" class="links__button" target="_self">
                        Link List Link 2
                    </a>
                </li>
                <li class="links__item">
                    <a href="?page=contact" class="links__button" target="_self">
                        Link List Link 3
                    </a>
                </li>
                <li class="links__item">
                    <a href="?page=contact" class="links__button" target="_self">
                        Link List Link 4
                    </a>
                </li>
            </ul>
        </section></div><div class="kitchen-example" id="demo-news"><div class="regents-container kitchen-example-label"><h2>News cards</h2></div><section class="news kitchen-news" id="news__242b25e2-aaa0-402f-8f24-4cd78788198a" style="--news-item-per-row: 3">
            <ul class="news__wrapper">

                <li class="news__item">
                    <div class="news__img-wrapper"><img class="news__img" src="assets/components/campus-5.jpg" alt="" loading="lazy" /></div>
                    <div class="news__content-wrapper">
                        <div class="news__body-wrapper">
                            <h3 class="news__heading"><a href="?page=contact" class="news__heading-link" target="_self">News Item 1</a></h3>
                            <div class="news__date-wrapper">
                                <div class="news__date">
                                    <span class="news__date-label">July 20th</span>
                                </div>
                            </div>
                            <div class="news__body">Here is my news item description.</div>

                            <ul aria-label="News categories" class="news__categories">
                                <li class="news__categories-item">category 1</li><li class="news__categories-item">category 2</li>
                            </ul>
                        </div>

                        <a class="news__button" href="?page=contact">
                            News Link 1

                        </a>
                    </div>
                </li>
                <li class="news__item">
                    <div class="news__img-wrapper"><img class="news__img" src="assets/components/campus-7.jpg" alt="" loading="lazy" /></div>
                    <div class="news__content-wrapper">
                        <div class="news__body-wrapper">
                            <h3 class="news__heading"><a href="?page=contact" class="news__heading-link" target="_self">News Item 2</a></h3>
                            <div class="news__date-wrapper">
                                <div class="news__date">
                                    <span class="news__date-label">July 30th</span>
                                </div>
                            </div>
                            <div class="news__body">News item 2 description.</div>

                            <ul aria-label="News categories" class="news__categories">

                            </ul>
                        </div>

                        <a class="news__button" href="?page=contact">
                            News Link 2

                        </a>
                    </div>
                </li>
                <li class="news__item">
                    <div class="news__img-wrapper"><img class="news__img" src="assets/components/campus-1.jpg" alt="" loading="lazy" /></div>
                    <div class="news__content-wrapper">
                        <div class="news__body-wrapper">
                            <h3 class="news__heading"><a href="?page=contact" class="news__heading-link" target="_self">News Item 3</a></h3>
                            <div class="news__date-wrapper">
                                <div class="news__date">
                                    <span class="news__date-label">Aug 20th</span>
                                </div>
                            </div>
                            <div class="news__body">News Item 3 description</div>

                            <ul aria-label="News categories" class="news__categories">
                                <li class="news__categories-item">New!</li>
                            </ul>
                        </div>

                        <a class="news__button" href="?page=contact">
                            News Link 3

                        </a>
                    </div>
                </li>
            </ul>
        </section></div><div class="kitchen-example" id="demo-phase"><div class="regents-container kitchen-example-label"><h2>Phase banner</h2></div><section class="phase-banner" id="phase__c172d833-232a-429b-bd88-6737585e2433">
            <div class="phase-banner__wrapper">
                <span class="phase-banner__status">Release</span>
                <div class="phase-banner_text-content">
                <p>Phase banner content - This phase of the project is done and code has been released. <a href="?page=contact">See more</a><br /></p>
                </div>
            </div>
        </section></div><div class="kitchen-example" id="demo-quote"><div class="regents-container kitchen-example-label"><h2>Pull quote with image</h2></div><section class="pull_quote" id="quote__390ad72e-b2e7-41bb-826d-4f072903c666">
                <div class="pull_quote__image-wrapper">
                    <img src="assets/components/campus-6.jpg" alt="" loading="lazy" class="pull_quote__image" />
                </div>
                <div class="pull_quote__content-wrapper">
                    <div class="pull_quote__content-quotes">
                        <blockquote class="pull_quote__content"><p>I'm Andrew, and this is my favorite CMS on the citadel.</p></blockquote>
                    </div>
                    <div class="pull_quote__author">Andrew</div>
                </div>
            </section></div><section class="image-gallery" id="demo-gallery" aria-labelledby="gallery-heading"><div class="component-inner"><h2 id="gallery-heading">Image gallery</h2><p>Select an image to open it, then use the arrows to browse.</p><ul class="image-gallery__wrapper"><li><button class="image-gallery__item-button" type="button" data-modal-open="kitchen-gallery" data-gallery-index="0" aria-haspopup="dialog" aria-controls="kitchen-gallery" aria-label="Open image 1: Oklahoma State University library at night"><img class="image-gallery__item-img" src="assets/components/campus-1.jpg" alt="Oklahoma State University library at night" loading="lazy"></button></li><li><button class="image-gallery__item-button" type="button" data-modal-open="kitchen-gallery" data-gallery-index="1" aria-haspopup="dialog" aria-controls="kitchen-gallery" aria-label="Open image 2: Students playing pool at the community center"><img class="image-gallery__item-img" src="assets/components/campus-4.jpg" alt="Students playing pool at the community center" loading="lazy"></button></li><li><button class="image-gallery__item-button" type="button" data-modal-open="kitchen-gallery" data-gallery-index="2" aria-haspopup="dialog" aria-controls="kitchen-gallery" aria-label="Open image 3: Students walking on campus"><img class="image-gallery__item-img" src="assets/components/campus-5.jpg" alt="Students walking on campus" loading="lazy"></button></li></ul><dialog class="image-gallery__dialog kitchen-gallery" id="kitchen-gallery" data-component-modal data-gallery aria-labelledby="gallery-dialog-heading"><button class="component-close" type="button" data-modal-close aria-label="Close image gallery" autofocus>×</button><h2 id="gallery-dialog-heading">Campus gallery</h2><figure><img class="kitchen-gallery-image" src="assets/components/campus-1.jpg" alt="Oklahoma State University library at night"><figcaption data-gallery-caption aria-live="polite">Image 1 of 3</figcaption></figure><div class="kitchen-gallery-controls"><button type="button" class="dialog__button" data-gallery-prev>Previous image</button><button type="button" class="dialog__button" data-gallery-next>Next image</button></div></dialog></div></section><section class="tabs" data-tabs id="demo-tabs" aria-labelledby="tabs-heading"><div class="component-inner"><h2 id="tabs-heading">Tabs</h2><div role="tablist" aria-label="Regents information" class="tabs__nav"><button class="tabs__button" type="button" role="tab" id="kitchen-tab-0" aria-controls="kitchen-panel-0" aria-selected="true" tabindex="0">Overview</button><button class="tabs__button" type="button" role="tab" id="kitchen-tab-1" aria-controls="kitchen-panel-1" aria-selected="false" tabindex="-1">Meetings</button><button class="tabs__button" type="button" role="tab" id="kitchen-tab-2" aria-controls="kitchen-panel-2" aria-selected="false" tabindex="-1">Contact</button></div><div class="tabs__content tabs__content--active" role="tabpanel" id="kitchen-panel-0" aria-labelledby="kitchen-tab-0" tabindex="0"><h3>Overview</h3><p>Tabbed content groups related information in one place. Use Left and Right arrows to change tabs.</p><a href="?page=members">Meet the Regents</a></div><div class="tabs__content" role="tabpanel" id="kitchen-panel-1" aria-labelledby="kitchen-tab-1" tabindex="0" hidden><h3>Meetings</h3><p>Find upcoming Board meeting dates and locations.</p><a href="?page=meetings">View upcoming meetings</a></div><div class="tabs__content" role="tabpanel" id="kitchen-panel-2" aria-labelledby="kitchen-tab-2" tabindex="0" hidden><h3>Contact</h3><p>Find the Board office contact information.</p><a href="?page=contact">Contact the Board</a></div></div></section><section class="video-modal" id="demo-video-standard" aria-labelledby="video-standard-heading"><div class="component-inner"><h2 id="video-standard-heading">Video banner</h2></div><div class="video-modal__wrapper"><div class="video-modal__img-wrapper"><img class="video-modal__img" src="assets/components/campus-3.jpg" alt="Oklahoma State University video preview" loading="lazy"><button class="video-modal__img-button" type="button" data-modal-open="kitchen-video-standard" aria-controls="kitchen-video-standard" aria-haspopup="dialog" aria-label="Play video banner"></button></div><div class="video-modal__content-wrapper"><h3>Watch the sample video</h3><p>Open a video in a focused dialog. Closing the window stops playback and returns you to this example.</p><div class="video-modal__button-wrapper"><a class="video-modal__button" href="?page=members">Meet the Regents</a><a class="video-modal__button video-modal__button--secondary" href="?page=contact">Contact us</a></div></div></div><dialog class="video-modal__dialog kitchen-video-dialog" id="kitchen-video-standard" data-component-modal aria-labelledby="kitchen-video-standard-title"><button class="component-close" type="button" data-modal-close aria-label="Close video" autofocus>×</button><h2 id="kitchen-video-standard-title">OSU video example</h2><div class="video-modal__player-wrapper"><iframe class="video-modal__player" data-video-src="https://www.youtube.com/embed/3eLx9GRoGV4?rel=0" title="OSU sample video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p><a href="https://www.youtube.com/watch?v=3eLx9GRoGV4">Watch on YouTube</a></p></dialog></section><section class="video-modal video-modal--secondary" id="demo-video-secondary" aria-labelledby="video-secondary-heading"><div class="component-inner"><h2 id="video-secondary-heading">Video banner: alternate</h2></div><div class="video-modal__wrapper video-modal__wrapper--right-side"><div class="video-modal__img-wrapper"><img class="video-modal__img" src="assets/components/campus-3.jpg" alt="Oklahoma State University video preview" loading="lazy"><button class="video-modal__img-button" type="button" data-modal-open="kitchen-video-secondary" aria-controls="kitchen-video-secondary" aria-haspopup="dialog" aria-label="Play video banner: alternate"></button></div><div class="video-modal__content-wrapper"><h3>Watch the sample video</h3><p>Open a video in a focused dialog. Closing the window stops playback and returns you to this example.</p><div class="video-modal__button-wrapper"><a class="video-modal__button" href="?page=members">Meet the Regents</a><a class="video-modal__button video-modal__button--secondary" href="?page=contact">Contact us</a></div></div></div><dialog class="video-modal__dialog kitchen-video-dialog" id="kitchen-video-secondary" data-component-modal aria-labelledby="kitchen-video-secondary-title"><button class="component-close" type="button" data-modal-close aria-label="Close video" autofocus>×</button><h2 id="kitchen-video-secondary-title">OSU video example</h2><div class="video-modal__player-wrapper"><iframe class="video-modal__player" data-video-src="https://www.youtube.com/embed/3eLx9GRoGV4?rel=0" title="OSU sample video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p><a href="https://www.youtube.com/watch?v=3eLx9GRoGV4">Watch on YouTube</a></p></dialog></section><section class="video-player" id="demo-video-inline" aria-labelledby="inline-video-heading"><div class="component-inner"><h2 id="inline-video-heading">Full-width video</h2><p>Play the video within the page.</p><div data-inline-video><div class="video-player__img-wrapper"><img class="video-player__img" src="assets/components/campus-3.jpg" alt="Oklahoma State University video preview" loading="lazy"><button class="video-player__img-button" type="button" data-video-play aria-label="Play full-width video"></button></div><div class="kitchen-inline-player" hidden><iframe class="video-modal__player" data-video-src="https://www.youtube.com/embed/3eLx9GRoGV4?rel=0" title="OSU full-width sample video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe><button class="dialog__button" type="button" data-video-stop>Stop video</button><a href="https://www.youtube.com/watch?v=3eLx9GRoGV4">Watch on YouTube</a></div></div></div></section><section class="kitchen-typography regents-container" id="demo-typography" aria-labelledby="typography-heading"><h2 id="typography-heading">Typography and rich text</h2><div class="kitchen-type-samples"><p class="kitchen-type-h1">Heading 1 · Oswald 40px</p><p class="kitchen-type-h2">Heading 2 · Oswald 36px</p><p class="kitchen-type-h3">Heading 3 · Open Sans 24px</p><p class="kitchen-type-h4">Heading 4 · Open Sans 20px semibold</p><p class="kitchen-type-h5">Heading 5 · Open Sans 20px medium</p><p class="kitchen-type-h6">Heading 6 · Oswald 20px</p></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Body copy supports <strong>strong emphasis</strong>, <em>italic emphasis</em>, and <a href="?page=contact">text links</a>.</p><ul><li>Unordered list item</li><li>Another list item</li></ul><ol><li>First step</li><li>Second step</li></ol></section>`;
}else if(page==='members'){
title='Meet the Regents';content=crumb('Regents Members')+`<section class="cards directory"><div class="directory-intro"><h1>Meet the Regents</h1><p>${boardDescription}</p></div><div class="cards__wrapper">${members.map(m=>`<article class="cards__item member-card"><a class="cards__heading-link member-card-link" href="?page=member&amp;id=${m.id}"><img class="member-portrait" src="assets/${m.image}.png" alt="" loading="lazy"><h2 class="cards__heading">${m.name}</h2></a><p>${m.position}<br>${m.term.replaceAll('\n','<br>')}</p></article>`).join('')}</div></section>`;
}else if(page==='member'){
const m=members.find(m=>m.id===params.get('id'));
if(m){title=m.name;content=crumb('Regents Members')+`<article class="profile regents-container"><div class="row"><div class="col-md-8 profile-content"><h1>${m.name}</h1><h2>${m.position.replace(/^Position \d: /,'')}</h2><p class="term">Current term: ${m.term.split('\n').at(-1)}</p><p>${boardDescription}</p></div><div class="col-md-4"><img src="assets/${m.image}.png" alt="Portrait of ${m.name}"></div></div></article>`;}
}else if(page==='minutes'){
const years=[...new Set(minutesArchive.map(meeting=>meeting.year))].sort().reverse();
const year=years.includes(params.get('year'))?params.get('year'):years[0];
const archive=minutesArchive.filter(meeting=>meeting.year===year);
title='Minutes — '+year;
content=crumb('Minutes')+`<section class="content-page regents-container minutes-page"><h1>Minutes</h1><form class="minutes-filter" action="index.html" method="get"><input type="hidden" name="page" value="minutes"><div class="minutes-filter__field"><label for="minutes-year">Select Year</label><select id="minutes-year" name="year" class="form-select" aria-describedby="minutes-year-help">${years.map(value=>`<option value="${value}"${value===year?' selected':''}>${value}</option>`).join('')}</select><span id="minutes-year-help" class="visually-hidden">Selecting a year updates the page.</span></div><noscript><button type="submit" class="minutes-filter__button">Show year</button></noscript></form><ul class="meeting-schedule minutes-schedule" aria-label="${year} meetings">${archive.map(meeting=>`<li class="meeting-row minutes-row">${meetingDate(meeting)}<div class="meeting-row__summary"><h2>${esc(meeting.title)}</h2><p>${esc(meeting.time.replace(' AM',' a.m.').replace(' PM',' p.m.'))}<br>${esc(meeting.location[0])}</p></div><div class="meeting-row__actions"><a class="meeting-action" href="?page=meeting&amp;archive=${minuteMeetingKey(meeting)}">Meeting details and documents<span class="visually-hidden"> — ${esc(meeting.title)}, ${meeting.month} ${meeting.day}, ${year}, ${meeting.time}</span></a></div></li>`).join('')}</ul><p class="minutes-archive-link"><a href="https://regents.okstate.edu/minutes">View earlier years in the full minutes archive</a></p></section>`;
}else if(page==='meetings'){
title='Upcoming Meetings';
content=crumb(title)+`<section class="content-page regents-container meetings-page"><h1>Upcoming Meetings</h1><p class="meeting-notice">Note: Under the Open Meeting laws with proper notice these dates, times, and locations may change. Also, Special meetings of the Board of Regents are sometimes scheduled. Contact the Board of Regents’ Office for up-to-date meeting information.</p><ul class="meeting-schedule">${meetings.map(meetingRow).join('')}</ul></section>`;
}else if(page==='meeting'){
const meetingId=params.get('id');
const archivedMeeting=minutesArchive.find(meeting=>minuteMeetingKey(meeting)===params.get('archive'));
const m=archivedMeeting?{...archivedMeeting,place:archivedMeeting.location[0],address:archivedMeeting.location.slice(1)}:meetingId===meetingExample.date?meetingExample:meetings.find(m=>m.date===meetingId)||(/^[0-3]$/.test(meetingId||'')?previousMeetings[Number(meetingId)]:null);
if(m){
title='Meeting Details';
const documentList=archivedMeeting?`<ul>${m.documents.map(doc=>`<li><a class="meeting-document-link" href="${esc(doc.url)}">${esc(doc.label==='Minutes information'?'Minutes':doc.label)}</a></li>`).join('')}</ul>`:'';
content=crumb(archivedMeeting?'Minutes':'Upcoming Meetings')+`<section class="content-page regents-container meeting-details-page"><h1>Meeting Details</h1><div class="meeting-details-grid"><div class="meeting-details-summary">${meetingDate(m)}<h2>${m.title}</h2><p>${m.time}</p><p class="meeting-venue">${m.place}${m.address?'<br>'+m.address.join('<br>'):''}</p></div><aside class="meeting-documents" aria-labelledby="meeting-documents-title"><h2 id="meeting-documents-title">Meeting Documents</h2>${documentList||`<ul>${['Agenda','Related agendas','Minutes'].map(label=>`<li><span class="meeting-document-label">${label}</span><span class="visually-hidden"> — not yet available</span></li>`).join('')}</ul><p class="meeting-documents-note">Documents have not been supplied. <a href="${meetingRequest(m,'Meeting documents')}">Request meeting documents</a>.</p>`}</aside></div><div class="meeting-details-bottom"><a class="meeting-action" href="${meetingRequest(m)}">Request information</a><a class="meeting-back" href="${archivedMeeting?'?page=minutes&amp;year='+m.year:'?page=meetings'}">${archivedMeeting?'Back to minutes':'Back to upcoming meetings'}</a></div></section>`;
}
}else if(page==='search'){
title='Search';const q=(params.get('q')||'').trim();const records=[...members.map(m=>({title:m.name,text:m.position+' '+m.term,url:'?page=member&id='+m.id})),...meetings.map((m,i)=>({title:`${m.title} — ${m.month} ${m.day}, ${m.year}`,text:`${m.month} ${m.day}, ${m.year} · ${m.time} · ${m.place}`,url:'?page=meeting&id='+m.date})),...news.map(n=>({title:n.title,text:n.body,url:'?page='+n.id})),{title:'Contact Us',text:'OSU/A&M Regents · 900 N. Portland Avenue · Oklahoma City · 405-945-3263 · board@okstate.edu',url:'?page=contact'},{title:'Meet the Regents',text:boardDescription,url:'?page=members'}];const matches=q?records.filter(r=>(r.title+' '+r.text).toLowerCase().includes(q.toLowerCase())):[];title=q?`Search results for “${q}”`:'Search';
content=crumb(title)+`<section class="content-page regents-container"><h1>Search results</h1><p>${q?`${matches.length} result${matches.length===1?'':'s'} for “${esc(q)}”`:'Enter a search term in the search box above.'}</p>${q&&!matches.length?'<p>Try a member’s name, an institution, or “meeting”.</p>':''}<ul class="search-results">${matches.map(r=>`<li><h2><a href="${r.url}">${r.title}</a></h2><p>${r.text}</p></li>`).join('')}</ul></section>`;
}else{
const article=news.find(n=>n.id===page);title=article?.title||({minutes:'Minutes',policy:'Policy Manual',staff:'Staff',contact:'Contact Us',ethics:'Ethics Point',accessibility:'Accessibility and Help'}[page]);
if(title){let body='';if(page==='accessibility')body='<p>This website is being developed toward WCAG 2.2 Level AA. An accessibility review is in progress; full conformance has not been established.</p><h2>Help using this website</h2><ul><li>Use the Skip to content link at the beginning of each page to bypass the header.</li><li>Use Tab and Shift+Tab to move between links and controls, and Enter to follow a link. The menu button also supports Space; Escape closes an open mobile menu.</li><li>Use your browser’s zoom and text settings to enlarge the content.</li></ul><h2>Report an accessibility barrier</h2><p>If you have difficulty accessing information, contact the Board at <a href="mailto:board@okstate.edu?subject=Website%20accessibility%20assistance">board@okstate.edu</a> or <a href="tel:+14059453263">405-945-3263</a>. Include the page address, the information you need, and the issue you encountered. You can request an alternative format.</p><h2>Documents and external websites</h2><p>Some reference documents have not yet been supplied for this preview. Documents added later and websites reached through external links require their own accessibility reviews.</p>';else if(page==='contact')body='<h2>OSU/A&amp;M Regents</h2><address>900 N. Portland Avenue<br>Oklahoma City, OK 73107</address><p>Phone: <a href="tel:+14059453263">405-945-3263</a><br>Fax: 405-945-3345<br>Email: <a href="mailto:board@okstate.edu">board@okstate.edu</a></p>';else if(article)body=`<p>${article.body}</p><div class="resource-note">${page==='presidential-search'?'Search timelines, application details, and related documents':'Compliance documents and posting details'} were not included in the supplied reference. <a href="mailto:board@okstate.edu">Contact the Board</a> for more information.</div>`;else body=`<div class="resource-note">${{minutes:'Meeting minutes',policy:'The policy manual',staff:'A staff directory',ethics:'An Ethics Point reporting link'}[page]} was not included in the supplied reference.<p class="mb-0 mt-2"><a href="?page=contact">Contact the Board for information →</a></p></div>`;content=crumb(title)+`<section class="content-page regents-container"><h1>${title}</h1><div class="col-lg-8">${body}</div></section>`;}
}
if(!content){title='Page not found';content=crumb(title)+'<section class="content-page regents-container"><h1>Page not found</h1><p><a href="./">Return to the homepage</a></p></section>';}
document.querySelector('#main-content').innerHTML=content+(page==='footer-options'?'':institutionContent);document.title=`${title} | OSU/A&M Board of Regents`;

// Keep the keyboard path predictable when a mobile menu is dismissed.
const menuButton=document.querySelector('.navbar-toggler');
const menuPanel=document.querySelector('#main-nav');
menuPanel.addEventListener('show.bs.collapse',()=>menuButton.setAttribute('aria-label','Close menu'));
menuPanel.addEventListener('hide.bs.collapse',()=>{
 menuButton.setAttribute('aria-label','Main menu');
 if(menuPanel.contains(document.activeElement)) menuButton.focus();
});
document.querySelector('.navbar').addEventListener('keydown',event=>{
 const dropdown=event.target.closest('.dropdown');
 const dropdownButton=dropdown?.querySelector('[data-bs-toggle="dropdown"]');
 if(event.key==='Escape'&&dropdownButton?.getAttribute('aria-expanded')==='true'){
  event.preventDefault();event.stopPropagation();
  bootstrap.Dropdown.getOrCreateInstance(dropdownButton).hide();
  dropdownButton.focus();
  return;
 }
 if(event.key==='Escape'&&menuPanel.classList.contains('show')){
  event.preventDefault();
  bootstrap.Collapse.getOrCreateInstance(menuPanel,{toggle:false}).hide();
  menuButton.focus();
 }
});
window.matchMedia('(min-width: 992px)').addEventListener('change',event=>{
 if(!event.matches&&menuPanel.contains(document.activeElement)&&!menuPanel.classList.contains('show')) menuButton.focus();
});
// Native fragment navigation also moves keyboard focus to the bypass destination.
document.querySelector('.skip-link').addEventListener('click',()=>document.querySelector('#main-content').focus());

// Reset nested disclosures when the surrounding mobile navigation is closed.
menuPanel.addEventListener('hide.bs.collapse',()=>{
 document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(button=>{
  bootstrap.Dropdown.getInstance(button)?.hide();
 });
});

// A year change updates the archive while retaining a shareable year URL.
document.querySelector('#minutes-year')?.addEventListener('change',event=>event.target.form.requestSubmit());
