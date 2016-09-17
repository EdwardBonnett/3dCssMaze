# 3d Css Maze
This is a 3d maze created entirely in HTML and CSS using a ton of radio buttons and some css transforms. Each level has has 3 orbs hidden somewhere in the maze, find them all to get to the next level. There are 5 levels in total, each slightly bigger than the last. Absolutely no JavaScript is needed client side and each level is less than 10kb in size. 

#Update
  A tint amount of javascript has been added to support accessibility via the keyboard by dynamically adding accesskeys:
  
    North: Alt + N
    
    East: Alt + X
    
    South: Alt + S
    
    West: Alt + W
    
    Pick up Orb: Alt + O
    
  This still keeps the project under 10kb, doesn't increase the reliance of javascript, and improves accessibility.

The server is running nodeJs and automatically generates the html required for the mazes from the json files in the mazes directory. It then gzips the html and sends it down.

#Running Locally
node bin/www
