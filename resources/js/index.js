// Project List Scale Animations



const scaleIn = [
  {
    transform: 'scaleY(0)'
  },
  {
    transform: 'scaleY(1)'
  }
  ]
const scaleOut = [
  {
    transform: 'scaleY(1)'
  },
  {
    transform: 'scaleY(0)'
  }
  ]  
const scaleTiming = {
  duration: 200,
  fill: 'both'
}



// Heading Arrow Rotate Animations



const rotateUp = [
  {
    transform: 'rotate(45deg)'
  },
  {
    transform: 'rotate(-135deg)',
    verticalAlign: '-10%'
  }
]
const rotateDown = [
  {
    transform: 'rotate(-135deg)'
  },
  {
    transform: 'rotate(45deg)',
    verticalAlign: '10%'
  }
]
const rotateTiming = {
  duration: 198
}



// Set Display Functions



const setDisplayNone = target => {
  target.style.display = 'none';
}
const setDisplayBlock = target => {
  target.style.display = 'block';
}



// Codecademy Projects Show/Hide



let codecademyProjectsHeadingClosed = document.getElementById('codecademy-project-heading-closed');
let codecademyProjectsHeadingOpen = document.getElementById('codecademy-project-heading-open');
let codecademyProjects = document.getElementById('codecademy-project-list');

let codecademyHeadingArrowDown = document.getElementById('codecademy-arrow-down');
let codecademyHeadingArrowUp = document.getElementById('codecademy-arrow-up');

const showCodecademyProjects = () => {
  codecademyHeadingArrowDown.animate(rotateUp, rotateTiming);
  setTimeout(setDisplayNone, 200, codecademyProjectsHeadingClosed);
  setTimeout(setDisplayBlock, 200, codecademyProjectsHeadingOpen);
  codecademyProjects.animate(scaleIn, scaleTiming);
  codecademyProjects.style.display = 'flex';
}

const hideCodecademyProjects = () => {
  codecademyHeadingArrowUp.animate(rotateDown, rotateTiming);
  setTimeout(setDisplayNone, 200, codecademyProjectsHeadingOpen);
  setTimeout(setDisplayBlock, 200, codecademyProjectsHeadingClosed);
  codecademyProjects.animate(scaleOut, scaleTiming);
  setTimeout(setDisplayNone, 198, codecademyProjects);
}

codecademyProjectsHeadingClosed.addEventListener('click', showCodecademyProjects);
codecademyProjectsHeadingOpen.addEventListener('click', hideCodecademyProjects);



// Unity Projects Show/Hide



let unityProjectsHeadingClosed = document.getElementById('unity-project-heading-closed');
let unityProjectsHeadingOpen = document.getElementById('unity-project-heading-open');
let unityProjects = document.getElementById('unity-project-list');

let unityHeadingArrowDown = document.getElementById('unity-arrow-down');
let unityHeadingArrowUp = document.getElementById('unity-arrow-up');

const showUnityProjects = () => {
  unityHeadingArrowDown.animate(rotateUp, rotateTiming);
  setTimeout(setDisplayNone, 200, unityProjectsHeadingClosed);
  setTimeout(setDisplayBlock, 200, unityProjectsHeadingOpen);
  unityProjects.animate(scaleIn, scaleTiming);
  unityProjects.style.display = 'flex';
}

const hideUnityProjects = () => {
  unityHeadingArrowUp.animate(rotateDown, rotateTiming);
  setTimeout(setDisplayNone, 200, unityProjectsHeadingOpen);
  setTimeout(setDisplayBlock, 200, unityProjectsHeadingClosed);
  unityProjects.animate(scaleOut, scaleTiming);
  setTimeout(setDisplayNone, 198, unityProjects);
}

unityProjectsHeadingClosed.addEventListener('click', showUnityProjects);
unityProjectsHeadingOpen.addEventListener('click', hideUnityProjects);