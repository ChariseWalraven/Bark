create table bark (
    id serial not null,
    name text,
    gender text,
    doglikestotal integer
);

insert into bark (name, gender, doglikestotal) values
  ('Peter', 'male',  null),
  ('Mary', 'female', null),
  ('Emma', 'female', null),
  ('Jack', 'male', null),
  ('Neo', 'female', null),
  ('Will', 'male', null),
  ('Precious', 'female', null);
