INSERT INTO
    department (id, name)
VALUES(1, "Awaiting Underwriting"),
    (2, "Examination"),
    (3, "Attorney Hold"),
    (4, "Delivered"),


INSERT INTO
    role (id, title, salary, department_id)
VALUES(1, "Examiner", 80000, 2),
    (2, "Attorney", 120000, 3),
    (3, "Underwriter", 15000, 4),
    (4, "Commercial Examiner", 120000, 1),

INSERT INTO 
    employee (id, first_name, last_name, role_id, manager_id)
VALUES(1, "Sabrina", "Salinas", 1,7),
    (2, "Evan", "Boles", 1,7),
    (3, "Cody", "Kimbal", 1,7),
    (4, "David", "Benett", 4,5),
    (5, "Lex", "Grossman", 2,NULL),
    (6, "Laurie", "Tipton", 4,5),
    (7, "Ellen", "Gunter", 3,NULL),
    (8, "Jordan", "Belfort", 2,NULL),
    (9, "Heidi", "Riano", 3,8),