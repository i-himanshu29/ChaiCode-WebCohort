# Kanban Board

<img src="./assets/Screenshot 2025-03-02 201449.png"/>

<img src="./assets/Screenshot 2025-03-02 201645.png"/>

<img src="./assets/Screenshot 2025-03-02 201658.png"/>


<img src="./assets/Screenshot 2025-03-02 204122.png"/>

<img src="./assets/Screenshot 2025-03-02 204252.png"/>

<img src="./assets/Screenshot 2025-03-02 204306.png"/>

<img src="./assets/Screenshot 2025-03-02 210929.png"/>


# Chats

#### HTMLcollection jitne bhi get hai unse milta hai and we can't use forEach or map with em. toh hame phle htmlCollection ko array m convert krna pdta hai but in case of querySelector all we get Node list and we can use forEach. m i right?

- getElementsBy() gives an HTMLCollection
so you need to convert it for forEach,

- but querySelectorAll() gives a NodeList, which works with forEach directly


####  yes jo event listeners hum create kar rahe he won memory occupy krke rakhenge na ?

- Yes, event listeners occupy memory as js keeps references
- so remove them when not needed to avoid memory leaks
