import './/App.css';


function App() {
  
  return (
    
    <>
    
    
    <div class="container">  
      <div class="box1">
        <h1>Learn to code by
          watching others</h1>
        <p>See how experienced developers solve problems in real-time.
Watching scripted tutorials is great, but understanding how 
developers think is invaluable.</p>
      </div>

      <div class="box2">
        <button class="btn" id="button-purple"><span id="bold-span">Try it free for 7 days</span> then $20/mo. thereafter</button>
        <div class="b2">
          <label for="first"></label>
          <input type="text" name="first" class="text-box" placeholder="First Name" required></input>
          <label for="last"></label>
          <input type="text" name="last" class="text-box" placeholder="Last Name" required></input>
          <label for="email"></label>
          <input type="text" email="email" class="text-box" placeholder="Email Address" required></input>
          <label for="password"></label>
          <input type="password" password="password" class="text-box" placeholder="Password" required></input>
          <button class="btn" id="button-green">CLAIM YOUR FREE TRIAL</button>
          <div class="terms">
            By clicking the button, you are agreeing to our <span id="red-s"> terms of service</span>
          </div>

        </div>
        </div>
    </div>
    </>
  );
}

export default App;
