INSERT INTO
    department (name)
VALUES
    ( "Awaiting Underwriting"),
    ( "Examination"),
    ( "Attorney Hold"),
    ( "Delivered");

INSERT INTO
    role (title, salary, department_id)
VALUES
    ( "Examiner", 80000, 2),
    ( "Attorney", 120000, 3),
    ( "Underwriter", 15000, 4),
    ( "Commercial Examiner", 120000, 1);

INSERT INTO 
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ( "Sabrina", "Salinas", 1,NULL),
    ( "Evan", "Boles", 1,NULL),
    ( "Cody", "Kimbal", 1,1),
    ( "David", "Benett", 4,1),
    ( "Lex", "Grossman", 2,4),
    ( "Laurie", "Tipton", 4,4),
    ( "Ellen", "Gunter", 3,4),
    ( "Jordan", "Belfort", 2,7),
    ( "Heidi", "Riano", 3,7);

-- ID WOULD HAVE TO EXIST FOR THE FOREIGN KEY TO WORK, SEE HOW LINES TWENTY THRU 
-- TWENTY EIGHT REFERENCE THE MANAGER POPULATED ABOVE THE ONE BELOW