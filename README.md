# Your very own Quiz App!

You are to write a fully functioning quiz app.
The questions should be coming in from an API. You can use any you may find, although it is highly recommended to use the [quizapi.io](https://quizapi.io/).

Here's a quick guide on how to use it with [axios](https://axios-http.com/docs/intro)

## 1. Create an account

You must [create an account](https://quizapi.io/register) in order to use this API.

## 2. Generate and API key

Head on over to [this link](https://quizapi.io/clientarea/settings/token) and generate an API token. This is required to use and access the API.

## 3. Fetch!

Unlike most APIs, this one is not queried via URL parameters. You can read up more on it's usage [in the documentation](https://quizapi.io/docs/1.0/overview)

Here're some examples on how to fetch quiz questions:

### Fetch questions random:

```js
const response = await axios.get("https://quizapi.io/api/v1/questions", {
  data: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});
```

<details>
<summary>View Response</summary>

```js
[
  {
    id: 6036,
    question:
      "How can a child component access the methods of its parent component in Vue?",
    description:
      "Learning how to invoke parent component methods from the child.",
    answers: {
      answer_a:
        "Emit an event from the child and handle the event with a method in the parent",
      answer_b: "Use 'inject()' to get the parent's methods",
      answer_c: "Directly import the parent component",
      answer_d: "Access the parent's 'data()' directly",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To call a parent's method, the child can emit an event, which the parent listens for, triggering its method.",
    tip: null,
    tags: [[Object]],
    category: "VueJS",
    difficulty: "Medium",
  },
  {
    id: 3639,
    question: "Which of the following is a popular framework built on Node.js?",
    description: "Identifying popular Node.js frameworks.",
    answers: {
      answer_a: "Flask",
      answer_b: "Express",
      answer_c: "Django",
      answer_d: "Laravel",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: "Express is a popular framework built on Node.js.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Easy",
  },
  {
    id: 3262,
    question:
      "Which command is used to convert an MBR partition table to GPT in Ubuntu?",
    description:
      "Converting from MBR to GPT allows for modern partitioning features and larger disk support.",
    answers: {
      answer_a: "Use 'gdisk /dev/sdX' and follow the conversion prompts",
      answer_b: "Run 'mbrtogpt convert sdX'",
      answer_c: "Type 'convert-mbr gpt'",
      answer_d: "Use 'parttool -mbrgpt'",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To convert an MBR partition table to GPT, use 'gdisk /dev/sdX' and follow the interactive prompts.",
    tip: null,
    tags: [[Object]],
    category: "Linux",
    difficulty: "Hard",
  },
  {
    id: 2620,
    question: "How do you install Celery in a Django project?",
    description:
      "Installing Celery is the first step to adding task management capabilities to a Django project.",
    answers: {
      answer_a: "pip install django-celery",
      answer_b: "pip install celery",
      answer_c: "pip install celery-beat",
      answer_d: "Add it to the Django settings file",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To install Celery in a Django project, use 'pip install celery' to add Celery to your Python environment.",
    tip: null,
    tags: [[Object]],
    category: "Django",
    difficulty: "Easy",
  },
  {
    id: 3298,
    question: "How do you schedule a cron job to run at 3 AM daily in Ubuntu?",
    description:
      "Scheduling a cron job allows you to automate repetitive tasks like backups or system updates.",
    answers: {
      answer_a: "Use 'crontab -e' and add '0 3 * * * command'",
      answer_b: "Run 'cronjob add -time 3am command'",
      answer_c: "Type 'schedule 3am task'",
      answer_d: "Use 'setcron 03:00 command'",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To schedule a cron job to run at 3 AM daily, use 'crontab -e' and add '0 3 * * * command'.",
    tip: null,
    tags: [[Object]],
    category: "Linux",
    difficulty: "Medium",
  },
  {
    id: 740,
    question: "How to stream pod logs (stdout) in Kubernetes?",
    description: null,
    answers: {
      answer_a: "kubectl logs -f my-pod",
      answer_b: "kubectl pod -f my-pod",
      answer_c: "kubectl stream -f my-pod",
      answer_d: "kubectl logs my-pod",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [[Object]],
    category: "Linux",
    difficulty: "Easy",
  },
  {
    id: 2398,
    question:
      "Which index strategy best optimizes queries with multiple OR conditions?",
    description: "Understanding OR condition optimization.",
    answers: {
      answer_a: "Single composite index",
      answer_b: "Multiple single-column indexes with bitmap scan capability",
      answer_c: "Expression index",
      answer_d: "Partial indexes",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Multiple single-column indexes with bitmap scan capability allow PostgreSQL to efficiently combine results from different indexes using bitmap operations for OR conditions.",
    tip: null,
    tags: [[Object]],
    category: "Postgres",
    difficulty: "Medium",
  },
  {
    id: 1349,
    question:
      "What is the primary advantage of using Dockerfile-based builds in OpenShift over S2I (Source-to-Image) builds?",
    description:
      "Dockerfile-based builds and S2I are two approaches to building images in OpenShift, each with specific use cases.",
    answers: {
      answer_a: "Dockerfile builds are faster",
      answer_b:
        "Dockerfile builds provide more control over the image build process",
      answer_c: "S2I builds do not support multi-stage builds",
      answer_d: "S2I builds cannot use custom base images",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Dockerfile builds allow for granular control over the build process, such as installing specific dependencies or using custom steps.",
    tip: null,
    tags: [[Object]],
    category: "DevOps",
    difficulty: "Hard",
  },
  {
    id: 3679,
    question:
      "Which command is used to install a specific version of a package?",
    description: "Managing package versions with npm.",
    answers: {
      answer_a: "npm install <package_name>@<version>",
      answer_b: "npm update <package_name> --version",
      answer_c: "npm add <package_name>@<version>",
      answer_d: "npm get <package_name>@<version>",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To install a specific version of a package, use 'npm install <package_name>@<version>'.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Easy",
  },
  {
    id: 1587,
    question: "How can you implement a reentrant context manager in Python?",
    description:
      "Reentrant context managers allow entering the same context multiple times without side effects.",
    answers: {
      answer_a: "Use the 'threading' module",
      answer_b: "Maintain a counter in the '__enter__' and '__exit__' methods",
      answer_c: "Use the 'reenter()' function from 'contextlib'",
      answer_d:
        "It is not possible to create reentrant context managers in Python",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To make a context manager reentrant, you can maintain a counter in the '__enter__' and '__exit__' methods to track the nesting level and ensure proper resource management.",
    tip: null,
    tags: [[Object]],
    category: "Code",
    difficulty: "Hard",
  },
  {
    id: 2878,
    question:
      "How do you perform a join between two related models in Django ORM?",
    description:
      "Performing a join allows you to retrieve data from multiple related models in a single query.",
    answers: {
      answer_a: "Use the select_related() or prefetch_related() methods",
      answer_b: "Use the join() method",
      answer_c: "Use a raw SQL join",
      answer_d: "Use the merge() function",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To perform a join, use select_related() for foreign key relationships or prefetch_related() for many-to-many and reverse relationships. These methods optimize the retrieval of related objects.",
    tip: null,
    tags: [[Object]],
    category: "Django",
    difficulty: "Medium",
  },
  {
    id: 1753,
    question:
      "Which built-in Python function can be used to determine the metaclass of a class?",
    description:
      "The 'type()' function can be used to determine the metaclass of a class.",
    answers: {
      answer_a: "metaclass()",
      answer_b: "type()",
      answer_c: "class()",
      answer_d: "meta()",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "The 'type()' function can be used to determine the metaclass of a class or the type of an object.",
    tip: null,
    tags: [[Object]],
    category: "Code",
    difficulty: "Easy",
  },
  {
    id: 6140,
    question:
      "How can you validate form input fields when the form is submitted in Vue's Composition API?",
    description:
      "Learning how to handle form validation when the user submits the form.",
    answers: {
      answer_a:
        "Create a function to validate each input, and call it in the 'submitForm()' method using reactive form state",
      answer_b: "Use 'provide/inject' to manage form validation",
      answer_c: "Directly use 'computed()' properties for validation",
      answer_d: "Validation is automatically handled in Vue",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Creating a validation function and using it in the 'submitForm()' method allows you to manually validate each input field before form submission.",
    tip: null,
    tags: [[Object]],
    category: "VueJS",
    difficulty: "Medium",
  },
  {
    id: 240,
    question: "Please select Spatial data types:",
    description: null,
    answers: {
      answer_a: "GEOMETRY",
      answer_b: "CIRCLE",
      answer_c: "SQUARE",
      answer_d: "POINT",
      answer_e: "POLYGON",
      answer_f: null,
    },
    multiple_correct_answers: "true",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "true",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [[Object]],
    category: "SQL",
    difficulty: "Hard",
  },
  {
    id: 835,
    question:
      "________is an open-source project built to simplify and streamline using Docker on a Mac or Windows.",
    description: null,
    answers: {
      answer_a: "Docker Cloud",
      answer_b: "Docker Compose",
      answer_c: "Docker Universal Control Plane",
      answer_d: "Docker Kitematic",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [[Object]],
    category: "Docker",
    difficulty: "Medium",
  },
  {
    id: 361,
    question:
      "What will be the output of the following query INSERT INTO students (student name) VALUE ('James Lenon');",
    description: null,
    answers: {
      answer_a:
        "a student record with the name James Lenon will be added into the students table",
      answer_b: "the above query will generate an error message.",
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [[Object]],
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 3092,
    question:
      "How do you use the cPanel API to create a remote MySQL database user for a specific account?",
    description:
      "Creating a remote MySQL user allows external applications to connect to a database hosted on the server.",
    answers: {
      answer_a: "Use 'Mysql::create_remote_user' in cPanel API",
      answer_b: "Call 'Database::add_remote_user' using WHM API",
      answer_c: "Run 'MySQLRemote::add_user' in cPanel API 2",
      answer_d: "Use 'RemoteDB::create_user' in CLI",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "The 'Mysql::create_remote_user' function in cPanel API is used to create a remote MySQL database user for a specific account.",
    tip: null,
    tags: [[Object]],
    category: "cPanel",
    difficulty: "Hard",
  },
  {
    id: 2672,
    question: "What does the @action decorator do in a DRF viewset?",
    description:
      "The @action decorator allows you to add custom actions to a viewset.",
    answers: {
      answer_a: "It converts a class-based view to a viewset",
      answer_b: "It adds a custom endpoint to a viewset",
      answer_c: "It validates serializer data",
      answer_d: "It handles authentication",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "The @action decorator in DRF is used to add custom endpoints to a viewset, allowing you to define additional actions beyond the standard ones like list, create, update, and delete.",
    tip: null,
    tags: [[Object]],
    category: "Django",
    difficulty: "Easy",
  },
  {
    id: 4897,
    question:
      "What happens if you use a MessagePort in a worker thread without initializing it?",
    description: "Understanding MessagePort behavior without initialization.",
    answers: {
      answer_a: "The thread will throw an error when trying to use the port",
      answer_b: "The thread will automatically initialize the port",
      answer_c: "The port will be silently ignored",
      answer_d: "The thread will close immediately",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Attempting to use an uninitialized MessagePort will result in an error.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 1026,
    question: "What is Docker Swarm mode?",
    description: null,
    answers: {
      answer_a: "A swarm is the name of the latest Docker release",
      answer_b:
        "A swarm is a group of machines that are running Docker and joined into a cluster",
      answer_c: "Docker swarm is also known as Docker Hub",
      answer_d: "Docker swarm is a tool for managing your CI/CD pipelines",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [[Object]],
    category: "Docker",
    difficulty: "Easy",
  },
];
```

</details>

### Fetch questions via category:

```js
const response = await axios.get("https://quizapi.io/api/v1/questions", {
  data: {
    apiKey: "YOUR_API_KEY_HERE",
    category: "NodeJs",
  },
});
```

<details>
<summary>View Response</summary>

```js
[
  {
    id: 5059,
    question:
      "How can you securely compare a user-provided password to a hashed password?",
    description: "Secure password comparison.",
    answers: {
      answer_a:
        "Derive a key from the user-provided password using the same salt and compare using `crypto.timingSafeEqual()`",
      answer_b: "Directly compare the hashed password strings",
      answer_c: "Hash the password twice and compare",
      answer_d: "Use `Buffer.compare()` for comparison",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "To securely compare a password, derive a key from the user-provided password using the same salt and compare the results using `crypto.timingSafeEqual()`.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 4466,
    question: "What does 'crypto.randomInt()' do in Node.js?",
    description: "Understanding secure random number generation.",
    answers: {
      answer_a: "Generates cryptographically strong random integers",
      answer_b: "Generates pseudo-random floating-point numbers",
      answer_c: "Hashes integers for security",
      answer_d: "Encrypts data using random keys",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'crypto.randomInt()' generates cryptographically strong random integers within a specified range.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4792,
    question:
      "How do you detect if a file operation resulted in a permission denied error?",
    description: "Identifying permission errors in file operations.",
    answers: {
      answer_a: "Check the error code for 'EACCES' or 'EPERM'",
      answer_b: "Listen for the 'denied' event on the fs module",
      answer_c: "Use fs.permissions() to validate permissions beforehand",
      answer_d: "Permission errors are not reported in Node.js",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Permission denied errors in file operations are identified by checking the error code, which is usually 'EACCES' or 'EPERM'.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 5147,
    question:
      "How can you enable detailed garbage collection logs in a Node.js application?",
    description: "Logging garbage collection details.",
    answers: {
      answer_a: "Use the `--trace-gc` flag",
      answer_b: "Call `global.gcLogs()`",
      answer_c: "Enable the `--gc-log` flag",
      answer_d: "Install the `gc-trace` package",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "The `--trace-gc` flag provides detailed logs about garbage collection in Node.js applications.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4546,
    question:
      "What is the purpose of 'stream.pipeline()' with async functions?",
    description: "Integrating async operations in streams.",
    answers: {
      answer_a: "Allows seamless integration of async functions with streams",
      answer_b: "Buffers all data during async processing",
      answer_c: "Converts async functions into readable streams",
      answer_d: "Enables backpressure-free data flow",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'stream.pipeline()' supports integrating async functions into stream workflows.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 3758,
    question: "What is the purpose of 'process.exit()'?",
    description: "Understanding process termination.",
    answers: {
      answer_a: "To stop the current HTTP request",
      answer_b: "To terminate the Node.js process",
      answer_c: "To restart the process",
      answer_d: "To return the exit code of the process",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: "'process.exit()' is used to terminate the Node.js process.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4650,
    question:
      "What happens when 'process.nextTick()' and a resolved Promise are queued in the same phase?",
    description: "Task prioritization in Node.js.",
    answers: {
      answer_a:
        "'process.nextTick()' callbacks execute before Promise callbacks",
      answer_b:
        "Promise callbacks execute before 'process.nextTick()' callbacks",
      answer_c: "They execute in the order they are queued",
      answer_d: "They execute concurrently",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'process.nextTick()' callbacks execute before Promise callbacks in the same event loop phase.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 4965,
    question: "How do you determine if a value is a Buffer?",
    description: "Checking if a value is a Buffer.",
    answers: {
      answer_a: "Buffer.isBuffer(value)",
      answer_b: "buffer.isBuffer(value)",
      answer_c: "Buffer.checkBuffer(value)",
      answer_d: "value.isBuffer()",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: "'Buffer.isBuffer()' checks if a value is a Buffer.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4919,
    question: "What does the 'stdio' option in 'spawn()' configure?",
    description: "Configuring stdio in 'spawn'.",
    answers: {
      answer_a:
        "How the child process's stdio streams are connected to the parent process",
      answer_b: "The maximum buffer size for the child's output",
      answer_c: "The number of input/output streams for the child process",
      answer_d: "The encoding used for the child process's output",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "The 'stdio' option in 'spawn()' configures how the child process's stdio streams are connected to the parent process.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Easy",
  },
  {
    id: 3668,
    question: "What is Node.js's event loop used for?",
    description: "Understanding the Node.js event loop.",
    answers: {
      answer_a: "To handle synchronous code",
      answer_b: "To manage asynchronous tasks",
      answer_c: "To execute file operations",
      answer_d: "To debug applications",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: "The event loop in Node.js handles asynchronous tasks.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Easy",
  },
  {
    id: 4908,
    question:
      "How do you handle exceptions in worker threads to ensure they don't crash the parent thread?",
    description: "Handling worker exceptions.",
    answers: {
      answer_a:
        "Listen for the 'error' event on the Worker instance and handle errors appropriately",
      answer_b: "Use a try-catch block in the main thread",
      answer_c: "Prevent errors by disabling blocking code",
      answer_d: "Errors in workers are automatically ignored",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Listening for the 'error' event on the Worker instance ensures errors are caught and handled without crashing the parent thread.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 4896,
    question:
      "What happens if you pass a SharedArrayBuffer to multiple workers without using Atomics?",
    description: "Shared memory behavior without Atomics.",
    answers: {
      answer_a: "Race conditions may occur, leading to inconsistent data",
      answer_b: "The SharedArrayBuffer becomes read-only",
      answer_c: "Each worker gets its own copy of the buffer",
      answer_d: "The SharedArrayBuffer is ignored by workers",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "Without Atomics, race conditions can occur when multiple workers modify a SharedArrayBuffer concurrently.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 3810,
    question: "What is the purpose of 'net.Server.listen()' in Node.js?",
    description: "Exploring the 'listen()' method in the 'net' module.",
    answers: {
      answer_a: "Binds the server to a specific address and port",
      answer_b: "Starts the server and handles connections asynchronously",
      answer_c: "Configures the server for secure communication",
      answer_d: "Both A and B",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'net.Server.listen()' binds the server to an address and port and starts listening for incoming connections.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 4621,
    question:
      "What happens when 'Promise.resolve()' is passed another Promise?",
    description:
      "Understanding the behavior of 'Promise.resolve()' with Promises.",
    answers: {
      answer_a:
        "It creates a new Promise that resolves with the same value as the passed Promise",
      answer_b: "It rejects with an error",
      answer_c: "It resolves with a Promise object itself",
      answer_d: "It throws an exception",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'Promise.resolve()' returns a new Promise that resolves or rejects with the same value or reason as the passed Promise.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4833,
    question:
      "How can you ensure that a worker is replaced immediately after it crashes?",
    description: "Replacing crashed workers automatically.",
    answers: {
      answer_a:
        "Listen for the 'exit' event and call 'cluster.fork()' to create a new worker",
      answer_b: "Enable cluster.autoRestart",
      answer_c: "Use the 'restartWorkerOnCrash()' method",
      answer_d: "Workers are automatically replaced by the Cluster module",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "You can replace crashed workers by listening for the 'exit' event and calling 'cluster.fork()' to create a new worker.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Hard",
  },
  {
    id: 4746,
    question: "What does the 'flag' option in 'fs.writeFile()' control?",
    description: "Understanding file write behavior.",
    answers: {
      answer_a: "Whether the file is overwritten or appended",
      answer_b: "The file's encoding",
      answer_c: "The permissions of the file",
      answer_d: "The size of the file",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "The 'flag' option in 'fs.writeFile()' controls whether the file is overwritten ('w') or appended ('a').",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4743,
    question:
      "How do you create a directory and its parent directories if they do not exist?",
    description: "Creating nested directories.",
    answers: {
      answer_a: "Use fs.mkdir() with the 'recursive' option set to true",
      answer_b: "Use fs.createDir()",
      answer_c: "Use fs.writeDir()",
      answer_d: "Use fs.mkdirSync() without options",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'fs.mkdir()' with the 'recursive' option set to true creates the directory and any missing parent directories.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4510,
    question: "What does the 'readable.read([size])' method do?",
    description: "Reading data from a readable stream.",
    answers: {
      answer_a: "Reads all available data from the stream",
      answer_b: "Reads a specific number of bytes or objects from the stream",
      answer_c: "Destroys the readable stream",
      answer_d: "Transforms data in the stream",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'readable.read([size])' reads a specific number of bytes or objects from the readable stream.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4508,
    question: "What is the purpose of the 'readable.unshift()' method?",
    description: "Exploring the unshift method in streams.",
    answers: {
      answer_a: "Destroys the stream",
      answer_b: "Pushes data back to the readable stream buffer",
      answer_c: "Pauses the stream temporarily",
      answer_d: "Transforms data in the stream",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'readable.unshift()' pushes data back to the front of the readable stream's internal buffer.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
  {
    id: 4567,
    question: "How does 'Promise.race()' differ from 'Promise.all()'?",
    description: "Understanding concurrent Promise management.",
    answers: {
      answer_a:
        "'Promise.race()' resolves or rejects with the first settled Promise",
      answer_b: "'Promise.race()' waits for all Promises to settle",
      answer_c:
        "'Promise.all()' runs Promises sequentially, while 'Promise.race()' runs them in parallel",
      answer_d: "'Promise.race()' always resolves, even if a Promise rejects",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "'Promise.race()' resolves or rejects as soon as the first Promise settles, regardless of its outcome.",
    tip: null,
    tags: [[Object]],
    category: "NodeJs",
    difficulty: "Medium",
  },
];
```

</details>

### Fetch with multiple parameters:

```js
const response = await axios.get("https://quizapi.io/api/v1/questions", {
  data: {
    apiKey: "YOUR_API_KEY_HERE",
    limit: "3",
    category: "SQL",
    difficulty: "Easy",
  },
});
```

<details>
<summary>View Response</summary>

```js
[
  {
    id: 408,
    question: "Which of these is not a valid name for a column",
    description: null,
    answers: {
      answer_a: "To",
      answer_b: "Near",
      answer_c: "Far",
      answer_d: "From",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [[Object]],
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 2164,
    question: "How do you select all columns from a table named 'employees'?",
    description: "Understanding the basics of SQL SELECT statements.",
    answers: {
      answer_a: "SELECT ALL FROM employees;",
      answer_b: "SELECT * FROM employees;",
      answer_c: "SHOW employees;",
      answer_d: "FETCH ALL FROM employees;",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation:
      "The 'SELECT * FROM employees;' command retrieves all columns from the 'employees' table.",
    tip: null,
    tags: [[Object]],
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 2176,
    question:
      "Which function in MySQL calculates the total of values in a numeric column?",
    description: "Learning MySQL functions for calculating sums.",
    answers: {
      answer_a: "SUM()",
      answer_b: "TOTAL()",
      answer_c: "ADD()",
      answer_d: "COUNT()",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation:
      "The 'SUM()' function returns the total of values in a specified numeric column.",
    tip: null,
    tags: [[Object]],
    category: "SQL",
    difficulty: "Easy",
  },
];
```

</details>
<br>

# Requirements

The design is provided in Figma, but there is no need to be pixel-perfect.

Intro page:

- User has to select a category and difficulty, otherwise an error should be shown
- Page should include a table with all the users past quizzes <b>with data persistence</b>

Quiz:

- If any answers are left unmarked, the user should be prompted with a confirmation
- Submitting the quiz

### Bonus

- Make the quiz history table sortable
- Add filter by passed/failed to the history table
- Add a timer to the quiz

# Important!

Do NOT commit API keys to Github. You can find out how to securely use them [here](https://devzibah.hashnode.dev/using-a-dotenv-file-to-store-and-use-api-keys-in-a-vite-built-react-app)
