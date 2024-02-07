
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Year', 'Sls'],
        ['2024', 45000],
        ['2023', 25000],
        ['2022', 35000],
        ['2021', 40000],
        ['2020', 15000]
    ]);
    // Set Options
    const options = {
        title: 'SALES RECORD',
        is3D: true
    };
    
    // Draw
    const piechart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    piechart.draw(data, options);
    

}


function makePDF() {
    var element = document.getElementById('record');
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
