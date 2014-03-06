define({
  jobs: [
    {
      id: 1,
      position: ['Student'],
      employment_type: 'education',
      working_type: 'university',
      dateFrom: '09.1999',
      dateTo: '02.2005',
      location: 'Pskov',
      company: 'Pskov Polistate University.  Bachelor\'s degree - system engineer.',
      website: 'http://pskgu.ru/',
      projects: []
    }, {
      id: 2,
      position: ['Cofounder', 'System administrator'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '09.2003',
      dateTo: '02.2005',
      location: 'Pskov',
      company: 'District 5 network',
      website: '',
      projects: [
        { title: 'District 5 network', description: 'I was one of cofounder of local network that operates than more 200+ users.',
          responsibilities: [
            'Performed day-to-day administration functions, backup and restoration, file server maintenance',
            'Implemented virus protection',
            'Analyzed the hardware and software requirements',
            'Managed user accounts, groups and controlling access rights',
            'Provided connectivity (LAN, Internet) troubleshooting and support for approximately 200 users'
          ],
          tags: [
            { languages: [], stack: ['Linux', 'FreeBSD'] }
          ]}
      ]
    }, {
      id: 3,
      position: ['C++ developer', 'Embedding developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '05.2004',
      dateTo: '05.2005',
      location: 'Pskov',
      company: 'Ats-Convers',
      website: 'http://www.atsconvers.ru/',
      projects: [
        { title: 'WebTel', description: 'Software for remote monitoring and control of uninterruptible power supply and WEB-based invertors.',
          responsibilities: [
            'Problem definition and development of the application structure and algorithms',
            'Code writing in Borland C++ 3.1, Watcom C/C++ 11, size optimization of program parts in assembler, development of the interface part on basis of WEB technologies (HTML/ JavaScript)',
            'Debugging, maintenance',
            'Technical writing'
          ],
          tags: [
            { languages: ['C++', 'C', 'Assembler'], stack: ['Borland C++ 3.1', 'Watcom 11', 'HTML', 'Javascript'] }
          ],
          screenshots: []
        },
        { title: 'WebTel TFTP updater', description: 'Software for loading updates of a WebTel program via a TFTP application-level protocol.',
          responsibilities: [
            'Development of the application structure and algorithms',
            'Code writing in Visual Studio 6.0 with Visual C++ 6.0',
            'Debugging, maintenance',
            'Technical writing (compressed HTML files in CHM format)'
          ],
          tags: [
            { languages: ['C++'], stack: ['MVC', 'Visual C++ 6.0', 'Visual Studio 98', 'TFTP', 'TCP/IP'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 4,
      position: ['Java developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '06.2005',
      dateTo: '10.2005',
      location: 'Saint-Petersburg',
      company: 'Stek',
      website: '',
      projects: [
        { title: 'Java SIM Menu', description: 'The applet for mobile that provides interactive access to services like forecasts, currency exchanges and entertainments with user-friendly navigation.',
          responsibilities: [
            'Development of the applet structure and algorithms',
            'Code writing in Intellij Idea 6.0 with Java',
            'Debugging'
          ],
          tags: [
            { languages: ['Java'], stack: ['SIM card', 'Intellij Idea', 'JVM'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 5,
      position: ['C#.NET developer', 'C++ developer', 'Embedding developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '11.2005',
      dateTo: '11.2006',
      location: 'Saint-Petersburg',
      company: 'ATIS',
      website: 'http://as-atis.ru/',
      projects: [
        { title: 'Kzp', description: 'Software for control and monitoring of railway equipment with the help of the serial port interface.',
          responsibilities: [
            'Development of the application structure and algorithms',
            'Code writing in Visual Studio .Net 2003/2005 with C++/C#',
            'Refactoring code using GoF patterns',
            'Debugging, maintenance',
            'Deploying application on railway stations around Eastern Russia (Krasnoyarsk, Novosibirsk)',
            'Writing the User\'s Guide and technical documentation (compressed HTML files in CHM format)'],
          tags: [
            { languages: ['C#', 'C++'], stack: ['.NET 2.0', 'GoF', 'Visual Studio .Net 2003', 'WinForms', 'ADO .NET', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        },
        { title: 'SmartMon', description: 'Software for diagnosis, measurement, display and registration of signals using Bluetooth-connection.',
          responsibilities: [
            'Development of the application structure and algorithms',
            'Code writing in Visual Studio .Net 2005 with C# (Smartphone 2003 SDK)',
            'Measurement set (8-bit microcontroller ATMega 8515)',
            'Transmission set (Bluetooth master adapter, BlueGiga WTOR). Programming the serial profile via AT commands',
            'Display set (Smart phone/PDA/PC with support of Bluetooth).'
          ],
          tags: [
            { languages: ['C#', 'C'], stack: ['.NET CF 2.0', 'Smartphone 2003 SDK', 'Visual Studio .Net 2005', '8-bit microcontroller ATMega 8515', 'Bluetooth', 'BlueGiga WTOR', 'Smartphone', 'PDC', 'PC', 'AT commands'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 6,
      position: ['C#.NET developer', 'Embedding developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '12.2006',
      dateTo: '03.2008',
      location: 'Saint-Petersburg',
      company: 'Kelman Ltd',
      website: 'http://www.kelman.co.uk/',
      projects: [
        { title: 'SMM', description: 'Application software for diagnostic and management the relay protection system.',
          responsibilities: [
            'Development GUI module for digital filter',
            'Code writing in Visual Studio .Net 2005 with C# (.NET 2.0)',
            'Debugging'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 2.0', 'Visual Studio .Net 2005', 'WinForms'] }
          ]
        },
        { title: 'TransConnect', description: 'Software for diagnostic, measurement of gas analysis hostboard through USB/TCP/Serial port interfaces.',
          responsibilities: [
            'Development GUI and communication modules',
            'Code writing in Visual Studio .Net 2005 with C# (.NET 1.1/2.0)',
            'Subversion Wiki as version control system bug tacking',
            'Refactoring code using GoF patterns',
            'Debugging, maintenance'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 1.1', '.NET 2.0', 'GoF', 'Visual Studio .Net 2005', 'SVN', 'Wiki', 'WinForms', 'NUnit', 'ADO.NET', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 7,
      position: ['Senior C#.NET developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '04.2008',
      dateTo: '09.2009',
      location: 'Saint-Petersburg',
      company: 'Paladyne Systems',
      website: 'http://www.paladynesys.com/',
      projects: [
        { title: 'Analytics Master', description: 'Software for optimizing hedge fund activities (back-office).',
          responsibilities: [
            'Development GUI and business logic (MSSQL 2005)',
            'Code writing in Visual Studio .Net 2008 TFS with C# (.NET 2.0/3.5)',
            'Refactoring, GoF design patterns',
            'Scrum'
          ],
          tags: [
            { languages: ['C#', 'SQL'], stack: ['.NET 2.0', 'Infragistics WinForms', 'GoF', 'Scrum', '.NET 3.5', 'MSSQL 2005', 'Visual Studio .Net 2008', 'TFS', 'WinForms', 'NUnit', 'Web service', 'Workflow foundation', 'ADO .NET', 'XML', 'Serialization', 'Reflection', 'Generics', 'Remoting'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 8,
      position: ['Senior C#.NET developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '08.2010',
      dateTo: '05.2011',
      location: 'Saint-Petersburg',
      company: 'Blueprint (Sofea SPB)',
      website: 'http://www.blueprintsys.com/',
      projects: [
        { title: 'Raptor', description: 'It is a complete requirements solution for definition and collaboration. Enables authors to define requirements using rich text, UI mockups, use cases, business process, data, and roles. Uses rich simulation to visually communicate requirements to stakeholders in distributed or local organizations.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 20 members (Canada/Russia)',
            'Development of Presentation Layer (Graphic Core team)',
            'Code writing in Visual Studio .Net 2010 TFS with C# (.NET 4.0), Silverlight',
            'Refactoring, GoF design patterns'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 4.0', 'GoF', 'Telerik Silverlight', 'Scrum', 'Silverlight', 'Visual Studio .Net 2008', 'Visual Studio .Net 2010', 'WCF RIA Services', 'NUnit', 'Entity framework', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 9,
      position: ['Cofounder', 'Technical leader'],
      employment_type: 'startup',
      working_type: 'remote',
      dateFrom: '10.2009',
      dateTo: '11.2011',
      location: 'Saint-Petersburg',
      company: 'DSB',
      website: 'http://www.simactivator.ru/',
      projects: [
        { title: 'SIMActivator', description: 'Software for automation of business processes for regional telecommunication companies.',
          responsibilities: [
            'Managing team as a technical leader within 2 developers working by SCRUM methology',
            'Development GUI and business logic (stored procedures, MySQL 5.x)',
            'Code writing in Visual Studio .NET 2008 with C# (.NET 3.5)',
            'Code writing in Eclipse with PHP 5.x',
            'Refactoring, GoF design patterns'
          ],
          tags: [
            { languages: ['C#', 'SQL', 'Javascript', 'PHP', 'HTML'], stack: ['.NET 3.5', 'Infragistics WinForms', 'MySQL 5', 'Scrum', 'AJAX', 'jQuery', 'WPF', 'WinForms', 'Windows services', 'Visual Studio .Net 2008', 'Visual Studio .Net 2010', 'NUnit', 'Linq', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 10,
      position: ['Senior C#.NET developer', 'Support engineer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '02.2011',
      dateTo: '03.2012',
      location: 'Saint-Petersburg',
      company: 'VinTelligent',
      website: 'http://www.vintelligent.com/',
      projects: [
        { title: 'M21', description: 'The terminal operation system (part of Ports America software products) that operate with container terminals.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 10 members (USA/Russia)',
            'Developing GUI for vessel application',
            'Code writing in Visual Studio .NET 2010 with C# (.NET 4.0)',
            'Code writing in Visual Studio 6.0 with Visual Basic 6.0',
            'Investigating performance issues using dotTrace, VBWatch tools, Performance Monitor',
            'Resolving customer complaints on real-time basis, systems monitoring',
            'Refactoring, GoF design patterns',
            'Create unit tests using NUnit integrated into Visual Studio 2010'
          ],
          tags: [
            { languages: ['Visual Basic 6.0', 'C#'], stack: ['.NET 4.0', 'DevExpress WinForms', 'GoF', 'WinForms', 'Scrum', 'SVN', 'Cruise control', 'Visual Studio .Net 2010', 'NUnit', 'Linq', 'dotTrace'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 11,
      position: ['Senior C#.NET developer', 'Installation developer'],
      employment_type: 'regular part-time',
      working_type: 'remote',
      dateFrom: '01.2011',
      dateTo: '04.2012',
      location: 'Saint-Petersburg',
      company: 'Perfect Vision Soft',
      website: 'http://vk.com/id153862424',
      projects: [
        { title: 'Perfect Vision Gallery', description: 'The tool helps non professionals to create video presentations easy and fast.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 7 members all around Russia',
            'Create build box machine using VisualBuild Pro',
            'Developing of msi installation package using WiX Toolset 3.5',
            'Implementing new features and fix bugs in desktop client application (C#, .NET 4.0, WPF)',
            'Create unit tests using NUnit integrated into Visual Studio 2010'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 4.0', 'WPF', 'Scrum', 'TFS', 'WiX Toolset 3.5', 'Visual Studio .Net 2010', 'Visual Build Pro', 'NUnit', 'Linq', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 12,
      position: ['Senior C#.NET developer', 'Visual Basic.NET developer', 'Support engineer'],
      employment_type: 'regular full-time',
      working_type: 'remote',
      dateFrom: '05.2012',
      dateTo: '11.2013',
      location: 'Saint-Petersburg',
      company: 'Ultima Businessware',
      website: 'http://www.ultimaerp.com/',
      projects: [
        { title: 'Ultima ERP', description: 'ERP-system of international standard for the medium and big businesses based on Oracle 11g database.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 20 members all around Russia',
            'Implementing new features and fix bugs in desktop client application (C#, .NET 4.0)',
            'Implementing BL with server-side handlers (Visual Basic .NET)',
            'Analysis, design, programming, testing, implementation and production support of Oracle PL/SQL scripts and stored-procedures',
            'Resolving customer complaints on real-time basis'
          ],
          tags: [
            { languages: ['C#', 'PL/SQL', 'Visual Basic .NET'], stack: ['.NET 4.0', 'Git', 'DevExpress WinForms', 'Oracle 11g', 'Scrum', 'SVN', 'Visual Studio .NET 2010', 'XML', 'Cruise control'] }
          ],
          screenshots: []
        }, {
          title: 'Supplier exchange', description: 'The web application helps company to manage the process of supplying goods.',
          responsibilities: [
            'Working directly with business analyst and customer to specify requirements',
            'Implementing new features in web application (PHP, Javascript, HTML)',
            'Implementing new features in server side web service (C#, .NET 4.0)',
            'Analysis, design, programming, testing, implementation and production support of Oracle PL/SQL scripts and stored-procedures'
          ],
          tags: [
            { languages: ['PHP', 'C#', 'Javascript', 'HTML'], stack: ['.NET 4.0', 'YII 2.0', 'Git', 'less', 'jQuery', 'Scrum', 'SVN', 'WebService', 'PhpStorm', 'Visual Studio .Net 2010', 'XML'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 13,
      position: ['Javascript frontend developer'],
      employment_type: 'regular part-time',
      working_type: 'remote',
      dateFrom: '12.2013',
      dateTo: '02.2014',
      location: 'Saint-Petersburg',
      company: 'Akzia.com',
      website: 'http://akzia.com/',
      projects: [
        { title: 'Akzia payments', description: 'The single page application provides payments support for initial 108 merchants through Elecsnet API (http://www.elecsnet.ru/).',
          responsibilities: [
            'Implementing frontend part with Javascript (AngularJS)',
            'Profiling application to find and fix leaks and performance bottlenecks',
            'Working by SCRUM methology in the distributed team'
          ],
          tags: [
            { languages: ['Javascript', 'CSS', 'HTML'], stack: ['AngularJS', 'WebStorm', 'Chrome DevTools', 'less', 'Scrum', 'Git'] }
          ]
        }
      ],
      references: ''
    }, {
      id: 14,
      position: ['MCAD/MCSD'],
      employment_type: 'certification',
      working_type: 'office',
      dateFrom: '09.2007',
      dateTo: '03.2008',
      location: 'Saint-Petersburg',
      company: 'Eureca',
      website: 'http://www.eureca.ru/',
      projects: []
    }, {
      id: 15,
      position: ['IELTS'],
      employment_type: 'certification',
      working_type: 'office',
      dateFrom: '08.2009',
      dateTo: '08.2009',
      location: 'Moscow',
      company: 'BKC',
      website: 'http://www.bkc.ru/',
      projects: []
    }, {
      id: 16,
      position: ['MCPD Windows Developer 4'],
      employment_type: 'certification',
      working_type: 'office',
      dateFrom: '11.2012',
      dateTo: '03.2013',
      location: 'Saint-Petersburg',
      company: 'Eureca',
      website: 'http://www.eureca.ru/',
      projects: []
    }
  ]
});
