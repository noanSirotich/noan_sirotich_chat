const rooms = ['General', 'Science', 'Sport'];
let selectedRoom = rooms[0];
const roomContainer = document.getElementById('left-section');


function generateRooms(roomList) {
    for (const room of roomList) {
        const roomElement = document.createElement('div');
        roomElement.innerHTML = room;
        roomContainer.appendChild(roomElement);

        if (room === selectedRoom ) {
            roomElement.classList.add('selected')
        }
        roomElement.addEventListener('click', () => {
            if (selectedRoom === room) {
                return;
            }
            selectedRoom = room;
            for (const roomElement of roomContainer.children) {
                if ( roomElement.innerHTML === room ) {
                    roomElement.classList.add('selected');
                } else {
                    roomElement.classList.remove('selected');
                }
            } 
            // ovdje mjenjamo sobu u scaledronu
            changeRooms(selectedRoom);
        })
    }
}

function changeRooms(destRoom) {
    room.unsubscribe();
    room = drone.subscribe(destRoom);
    room.on('message', message => displayMessage(message));
    deleteMsgs();
}

generateRooms(rooms);


