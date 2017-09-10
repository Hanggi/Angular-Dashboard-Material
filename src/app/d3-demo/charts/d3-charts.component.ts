import { Component } from '@angular/core';

import { D3Service, D3 } from '../d3.service';
import * as d3 from 'd3';


@Component({
	selector: 'd3-charts',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './d3-charts.html',
	styles: ['.bar { fill: steelblue; }', '.bar:hover {fill: brown;}', '.axis--x path {display: none;}']
})

export class D3ChartsComponent {

	private d3: D3;

	constructor(private d3Service: D3Service) {
		this.d3 = d3Service.getD3();
	}

	ngOnInit() {
		let d3 = this.d3;
		console.log(this.d3);

		// let svg = d3.select("svg"),
		// 	margin = {top: 20, right: 20, bottom: 30, left: 40},
		// 	width = +svg.attr("width") - margin.left - margin.right,
		// 	height = +svg.attr("height") - margin.top - margin.bottom;


		// let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
		// 	y = d3.scaleLinear().rangeRound([height, 0]);

		// let g = svg.append("g")
		// 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		// d3.tsv("assets/data.tsv", function(d) {
		// 	d.frequency = +d.frequency;
		// 	return d;
		// }, function(error, data) {
		// 	if (error) throw error;


		// 	x.domain(data.map(function(d) { return d.letter; }));
		// 	y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

		// 	g.append("g")
		// 		.attr("class", "axis axis--x")
		// 		.attr("transform", "translate(0," + height + ")")
		// 		.call(d3.axisBottom(x));

		// 	g.append("g")
		// 		.attr("class", "axis axis--y")
		// 		.call(d3.axisLeft(y).ticks(10, "%"))
		// 		.append("text")
		// 		.attr("transform", "rotate(-90)")
		// 		.attr("y", 6)
		// 		.attr("dy", "0.71em")
		// 		.attr("text-anchor", "end")
		// 		.text("Frequency");

		// 	g.selectAll(".bar")
		// 		.data(data)
		// 		.enter().append("rect")
		// 			.attr("class", "bar")
		// 			.attr("x", function(d) { return x(d.letter); })
		// 			.attr("y", function(d) { return y(d.frequency); })
		// 			.attr("width", x.bandwidth())
		// 			.attr("height", function(d) {return height - y(d.frequency);});

		// });

		// var svg = d3.select("svg"),
		// 	width = +svg.attr("width"),
		// 	height = +svg.attr("height"),
		// 	radius = Math.min(width, height) / 2,
		// 	g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		// var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

		// var pie = d3.pie()
		// 	.sort(null)
		// 	.value(function (d: any) { return d.population; });

		// var path: any = d3.arc()
		// 	.outerRadius(radius - 10)
		// 	.innerRadius(0);

		// var label = d3.arc()
		// 	.outerRadius(radius - 40)
		// 	.innerRadius(radius - 40);

		// d3.csv("/assets/pai.csv", function (d: any) {
		// 	d.population = +d.population;
		// 	return d;
		// }, function (error, data) {
		// 	if (error) throw error;

		// 	var arc = g.selectAll(".arc")
		// 		.data(pie(data))
		// 		.enter().append("g")
		// 		.attr("class", "arc");

		// 	arc.append("path")
		// 		.attr("d", path)
		// 		.attr("fill", function (d: any) { return color(d.data.age); });

		// 	arc.append("text")
		// 		.attr("transform", function (d: any) { return "translate(" + label.centroid(d) + ")"; })
		// 		.attr("dy", "0.35em")
		// 		.text(function (d: any) { return d.data.age; });
		// });
		
	}
}
