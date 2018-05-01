# JS developer - Test B

SPA developed for the **Oowlish's test B - js**.

# Installation

**1. First, download and install Node.js [here](https://nodejs.org/en/download/).**


**2. Also Install JSON Server so the app can get the data from the REST API:**

```
npm install -g json-server
```
You can read more about **JSON Server** [here](https://github.com/typicode/json-server).


**3. Then open the terminal, go to ~/JSONSERVER folder and start the JSON Server:**

```
npm run json:server
```

Now if you go to http://localhost:3000/clinics/1, you'll get:

```
{ 
  "id": 1, 
  "name": "Clínica Veterinária Natureza Animal", 
  "address": "Av. Santos Dumont, 2484 - Loja 03",
  "phone": "(85) 3268-1427" 
}
```