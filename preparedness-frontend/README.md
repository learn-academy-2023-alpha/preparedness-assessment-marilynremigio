# Preparedness Assessment

## Frontend Assessment

### Frontend Styling Acceptance Criteria
[x] The header text color is white and is 50px
[x] The header is centered on the page
[x] The input label text color is white and is 35px
[x] The input label is centered on the page
[x] The input field text is 18px
[x] The input field should take up 50% of the width of the page
[x] The input field is centered on the page
[x] There is 12px of padding on the left and the right of the input field
[x] There is 6px of padding on the top and the bottom of the input field
[x] The background is this image
[x] The buttons are centered under the input field
[x] The background color of the buttons are #0dcaf0
[x] The color of the text on the buttons is white

[x] There is 10 px of padding on all sides of the button
[x] There is 20px between the two buttons
[x] There is 20px between the bottom of the input and the top of the buttons



## Backend Assessment

### Prompt: What is the relationship between a model called person, a model called house, and a model called car? (Hint: there is more than one right answer!)

#### House as Primary Key
A House has_many persons, a Person belongs_to a House
A House has_many cars, a Car belongs_to a House

#### Person as Primary Key
A Person has_many cars, a car belongs_to a Person
A Person has_many credit_cards, a credit_card belongs_to a Person

#### Car as Primary Key
A Car has_many persons, a person belongs_to a Car
A Car has_many owners, an owner belongs_to a Car

#### Owner as Primary Key
An Owner has_many houses, a house belongs_to an Owner
An Owner has_many cars, a car belongs_to an Owner
An Owner has_many credit_cards, a credit_card belongs_to an Owner
