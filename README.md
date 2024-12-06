# Week 1 Toy Problems

A comprehensive JavaScript implementation of various programming challenges including student grading, speed detection, salary calculation, sorting algorithms, pattern generation, and geometric calculations.

## Table of Contents
- [Project Structure](#project-structure)
- [Core Challenges](#core-challenges)
  - [Challenge 1: Student Grade Generator](#challenge-1-student-grade-generator)
  - [Challenge 2: Speed Detector](#challenge-2-speed-detector)
  - [Challenge 3: Net Salary Calculator](#challenge-3-net-salary-calculator)
- [Extra Practice Questions](#extra-practice-questions)
  - [Extra Q1: Bubble Sort Implementation](#extra-q1-bubble-sort-implementation)
  - [Extra Q2: Staircase Pattern](#extra-q2-staircase-pattern)
  - [Extra Q3: Cylinder Volume Calculator](#extra-q3-cylinder-volume-calculator)
- [Setup Instructions](#setup-instructions)
- [Running the Programs](#running-the-programs)
- [Code Structure](#code-structure)
- [Technologies Used](#technologies-used)

## Project Structure
```
Week1_Toy_Problems/
├── Challenge1_StudentGrade/
│   ├── gradeCalculator.js
│   ├── gradeOutput.js
│   ├── index.js
│   └── inputValidator.js
├── Challenge2_SpeedDetector/
│   ├── index.js
│   ├── outputFormatter.js
│   ├── speedCalculator.js
│   └── speedValidator.js
├── Challenge3_NetSalary/
│   ├── deductionsCalculator.js
│   ├── index.js
│   ├── salaryCalculator.js
│   └── taxCalculator.js
├── ExtraQ1_BubbleSort/
│   ├── bubbleSort.js
│   ├── arrayValidator.js
│   ├── outputFormatter.js
│   └── index.js
├── ExtraQ2_Staircase/
│   ├── staircaseGenerator.js
│   ├── inputValidator.js
│   ├── displayFormatter.js
│   └── index.js
├── ExtraQ3_CylinderVolume/
│   ├── cylinderCalculator.js
│   ├── dimensionsValidator.js
│   ├── volumeFormatter.js
│   └── index.js
└── README.md
```

## Core Challenges

### Challenge 1: Student Grade Generator
- Accepts student marks (0-100)
- Outputs the corresponding grade based on the following criteria:
  - A: > 79
  - B: 60 to 79
  - C: 59 to 49
  - D: 40 to 49
  - E: less than 40

#### Usage:
```bash
node Challenge1_StudentGrade/index.js
```

### Challenge 2: Speed Detector
- Takes car speed as input
- Outputs:
  - "Ok" if speed is less than 70
  - For every 5 km/h above the speed limit (70), gives one demerit point
  - Outputs total demerit points
  - Outputs "License suspended" if points exceed 12

#### Usage:
```bash
node Challenge2_SpeedDetector/index.js
```

### Challenge 3: Net Salary Calculator
Calculates an individual's net salary using:
- Basic salary
- Benefits

Computes:
- Gross salary
- PAYE (Tax) - Uses KRA tax bands
- NHIF deductions
- NSSF deductions
- Net salary

#### Usage:
```bash
node Challenge3_NetSalary/index.js
```

## Extra Practice Questions

### Extra Q1: Bubble Sort Implementation
- Implements the bubble sort algorithm
- Takes array input from user
- Displays both original and sorted arrays
- Includes input validation and error handling

#### Usage:
```bash
node ExtraQ1_BubbleSort/index.js
```

### Extra Q2: Staircase Pattern
- Creates a staircase pattern using '#' characters
- Number of steps determined by user input
- Displays pattern with proper alignment

#### Usage:
```bash
node ExtraQ2_Staircase/index.js
```

### Extra Q3: Cylinder Volume Calculator
- Calculates cylinder volume using object-oriented programming
- Takes radius and height as input
- Displays formatted result with 4 decimal places
- Implements proper validation for dimensions

#### Usage:
```bash
node ExtraQ3_CylinderVolume/index.js
```

## Setup Instructions

1. Clone the repository:
```bash
git clone
```

2. Navigate to the project directory:
```bash
cd Week1_Toy_Problems
```

3. Make sure Node.js is installed:
```bash
node --version
```

## Running the Programs

Each challenge can be run independently using Node.js. Navigate to the project root directory and use the following commands:

```bash
# Challenge 1 - Student Grade Generator
node Challenge1_StudentGrade/index.js

# Challenge 2 - Speed Detector
node Challenge2_SpeedDetector/index.js

# Challenge 3 - Net Salary Calculator
node Challenge3_NetSalary/index.js

# Extra Q1 - Bubble Sort
node ExtraQ1_BubbleSort/index.js

# Extra Q2 - Staircase Pattern
node ExtraQ2_Staircase/index.js

# Extra Q3 - Cylinder Volume
node ExtraQ3_CylinderVolume/index.js
```

## Code Structure

Each challenge follows a modular structure with separate files for:
1. Core logic implementation
2. Input validation
3. Output formatting
4. Main program execution (index.js)

This separation of concerns makes the code:
- More maintainable
- Easier to test
- More readable
- More scalable

## Technologies Used

- Node.js
- JavaScript (ES6+)
- Built-in modules:
  - readline: For handling user input
  - fs: For file system operations (if needed)

## Author
Joyce Benson

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Contributing
Feel free to fork this repository and submit pull requests to contribute to this project.

## Acknowledgments
- Moringa School for providing the challenge requirements
- Contributors who helped in testing and improving the code# Week-1-Toy-Problems
# Week-1-Toy-Problems
# Week-1-Toy-Problems
# Code-Challenge
