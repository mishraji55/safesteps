// Handling pincode search functionality
document.getElementById('pincodeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pincode = document.getElementById('pincode').value;
    const resultDiv = document.getElementById('searchResult');

    // Simulating pincode search result (you can add real data or API)
    if (pincode === '110001') {
        resultDiv.innerHTML = `
            <p><strong>Police Station:</strong> Connaught Place Police Station</p>
            <p><strong>Address:</strong> Parliament Street, New Delhi - 110001</p>
            <p><strong>Phone:</strong> +91-1123456789</p>
        `;
    } 
    else if (pincode==='110002'){
        resultDiv.innerHTML = `
            <p>Police Station: I P ESTATE POLICE HEAD QUARTERS INDRAPRASTHA NEW DELHI</p>
            <p>Address: NEW DELHI KOTWALI CENTRAL 110002</p>
            <p>Phone (IP estate): +91-11-23318474</p>
            <p>Phone(daryaganj):+91-11100021-23274683</p>
        `; 
    }
    else if(pincode==='110003'){
        resultDiv.innerHTML = `
            <p>Police Station:Police Station Lodhi Colony</p>
            <p>Address: Lodhi Colony, Najaf Khan Road, Block 23, BK Dutt Colony, New Delhi, Delhi 110003, India</p>
            <p>Phone:1124628565 </p>
        `; 
    }
    else if (pincode==='110004'){
        resultDiv.innerHTML = 
        "<P>police station: Rashtrapati Bhawan police station</P><p>J57V+RV3, Shankar Rd, Rashtrapati Bhawan, President's Estate, New Delhi, Delhi 110004</p><P>011-23012991</p>"
    }
    else {
        resultDiv.innerHTML = `<p>No police station found for this pincode.</p>`;
    }
});

// Animated counter for analytics (simulated data)
const analyticsData = document.getElementById('analyticsData');
let count = 0;

function loadAnalytics() {
    setInterval(() => {
        count += Math.floor(Math.random() * 20);  // Simulated increase
        analyticsData.innerHTML = `Safety reports processed: ${count}`;
    }, 1000);
}

loadAnalytics();

