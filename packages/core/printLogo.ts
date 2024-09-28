//打印log的
export default function () {
    if (PROD) {
      const logo = `
__________________________________________________________________________
         .__                                __ __________.__              
  ____ |  |   ____   _____   ____   _____/  |\______   \  |  __ __  ______
_/ __ \|  | _/ __ \ /     \_/ __ \ /    \   __\     ___/  | |  |  \/  ___/
\  ___/|  |_\  ___/|  Y Y  \  ___/|   |  \  | |    |   |  |_|  |  /\___ \ 
 \___  >____/\___  >__|_|  /\___  >___|  /__| |____|   |____/____//____  >
     \/          \/      \/     \/     \/                              \/                       
___________________________________________________________________________
                                 author:leonie
  `;
  
      const rainbowGradient = `
  background: linear-gradient(135deg, orange 60%, cyan);
  background-clip: text;
  color: transparent;
  font-size: 16px; 
  line-height: 1;
  font-family: monospace;
  font-weight: 600;
  `;
  
      console.info(`%c${logo}`, rainbowGradient);
    } else if (DEV) {
      console.log("[EricUI]:dev mode...");
    }
  }
  