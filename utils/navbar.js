function navbarApears(currentUser){
    if(currentUser){ return {navbarTrue: true}}
    else return {}
}

module.exports = navbarApears;