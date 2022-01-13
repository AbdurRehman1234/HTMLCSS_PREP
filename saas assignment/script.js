var sidebar_action_btn = document.getElementsByClassName('btn-v');
var sidebar_content = document.querySelector('.sidebar');
sidebar_action_btn[0].addEventListener('click', () => {
    sidebar_content.classList.toggle('sidebar-visibility-off');


})




var dropdown_triger_btn = document.getElementsByClassName('dd-trigger-item');
var dropdown_content = document.querySelector('.dropdown-content');
dropdown_triger_btn[0].addEventListener('click', () => {
    dropdown_content.classList.toggle('dropdown-content-visibility');


})



// var my_ctx = document.getElementById('chart1');
// var myChart1 = new Chart(my_ctx, {
//     type: 'doughnut',
//     data: {
//         // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [194, 21],
//             backgroundColor: [
//                "rgba(255, 255, 255, 0.753)",
//                "rgba(5, 235, 215, 0.753)",
//             ],
//             borderColor: [
//                 // 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         maintainAspectRatio: false,
//         cutout: 40,
//         // scales: {
//         //     y: {
//         //         beginAtZero: true
//         //     }
//         // }
//     }
// });
