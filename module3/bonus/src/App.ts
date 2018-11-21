export class App {
  constructor() {
    console.debug('App started');
  }

  /**
   * Run the application.
   */
  public run() {
    this.addLogo();
  }

  /**
   * Add the logo to the page.
   */
  private addLogo() {
    var servinubeImage = require('./content/servinube-web.png');
    var logoImageTag   = document.createElement('img');

    logoImageTag.src = servinubeImage;
    document.getElementById('page-logo').appendChild(logoImageTag);
  }
}