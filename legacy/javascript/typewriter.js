wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class Typerwriter {
    constructor(el, options){
      this.el = el;
      this.words = [...this.el.dataset.typewriter.split(',')];
      this.speed = options?.speed || 100;
      this.delay = options?.delay || 1500;
      this.repeat = options?.repeat;
      this.initTyping();

      this.typingStyle = "error";
      this.typedStyle = "hljs-keyword"
    }

    toggleTyping = () => {
      this.el.classList.toggle('hljs-keyword')
      this.el.classList.toggle('error')
    };

    async typewrite(word){
      await wait(this.delay);
      this.toggleTyping();
      let i = 0;
      for (const letter of word.split('')) {
        this.el.textContent += letter;
        if (i == word.length-1)
          this.toggleTyping();
        i++
        await wait(this.speed)
      }
    
      await wait(this.delay);
      this.toggleTyping();
      while (this.el.textContent.length !== 0){
        this.el.textContent = this.el.textContent.slice(0, -1);
        await wait(this.speed)
      }
      this.toggleTyping();
    }

    async initTyping() {
      for (const word of this.words){
        await this.typewrite(word);
      }
      if(this.repeat){
        await this.initTyping();
      } else {
        this.el.style.animation = 'none';
      }
    }
  }

  document.querySelectorAll('[data-typewriter]').forEach(el => {
    new Typerwriter(el, {
      repeat: true,
    })
  })