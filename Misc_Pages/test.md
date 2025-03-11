---
layout: post
title: "My First Blog Post"
date: 2025-03-08
permalink: /LiF1/
authors: ["Talha Sultan", "John Doe"]
---

# Light in Flight
Light moves incredibly fast - about 7.5 times around the earth's Equator in 1 second. To the human eye, light appears to propagate instantaneously. But what if we could artificially slow down time to observe light transport? It turns out that capturing such measurements, also known as ***transient images***, can be used to distinguish different materials based on their scattering properties, accurately measure 3D geometry and reflectance properties of objects, or even to "see around corners". The following ***light in flight*** video, created by a research team at MIT [1], showcases light propagating through a Coke bottle.

<p align="center">
  <img src="{{site.baseurl}}/assets/images/Misc_Pages/Slow-motion-light.gif" />
</p>

Watching this video was one of the key moments that inspired me to pursue my PhD under [Andreas Velten](https://biostat.wisc.edu/~velten/), who was the first author on this work! In this post, I go over the working principle of generating these videos and then recreate this experiment using emerging sensor technology that may be in our smartphones one day.

### Working Principle
How do we capture light-in-flight videos? As shown in Figure 2, the process requires:

1. A pulsed laser that emits ultrashort pulses, typically under 100 picoseconds (ps).
2. A time-of-flight (ToF) detector with high temporal resolution (<500 ps) and preferably single-photon sensitivity.
3. A method to measure the time delay between the laser pulse emission and photon detection.

The laser pulse is directed onto a scene using rotating mirrors (galvos), sequentially illuminating different regions with short bursts of light. Each pulse is synchronized with a digital timing signal that helps the ToF detector measure the light's travel time.

Since each pixel detects at most one photon per pulse, the measurement is repeated millions of times per second to accumulate sufficient data. Each photon is detected stochastically, and as the number of measurements increases, the probability distribution of photon arrival times converges to the true light transport dynamics, allowing us to reconstruct a transient image that visualizes the motion of light.

<p align="center">
  <img src="{{site.baseurl}}/assets/images/Misc_Pages/LiF_Schematic_1.png"
   style="width: 40%; max-width: 1000px; height: auto;">
  <p align="center">
  <em> Fig. 2: Our experimental setup for capturing our dataset [1] </em>
  </p>
</p>


### SPAD Sensors
While the team at MIT used a $300,000 streak camera as their time-of-flight detector, researchers at Stanford recreated light-in-flight videos using a more accessible technology: Single-Photon Avalanche Diodes (SPADs) [2]. These sensors can detect individual photons with picosecond time resolution and leverage Time-Correlated Single Photon Counting (TCSPC) modules, such as the PicoHarp, to measure photon time-of-flight relative to a synchronized pulse train. Although still an emerging technology, a more affordable version of SPADs has already been integrated into some smartphones [3] and may see widespread adoption in the future,  and may be adopted [ubiquitously](https://www.ubicept.com/) in the future.

### Recreating Light in Flight
While the Stanford team used a linear SPAD array, we utilize a newer 2D array with 192×128 pixels, enabling parallel photon acquisition and significantly reducing capture time.

For our experiment, we set up a glass spiral, borrowed from the UW Madison Physics Museum, as our test object.

<p align="center">
  <img src="{{site.baseurl}}/assets/images/Misc_Pages/Glass_Tube_1.png"
   style="width: 60%; max-width: 1000px; height: auto;">
  <p align="center">
  <em> Fig. 3: Test Scene with Archimedean Glass Spiral [1] </em>
  </p>
</p>

We use a galvo mirror to direct the laser beam onto one end of the glass tube. With this setup, we capture a light-in-flight video, revealing the propagation of light through the tube.


<p align="center">
  <img src="{{site.baseurl}}/assets/images/Misc_Pages/output.gif"
   style="width: 40%; max-width: 1000px; height: auto;">
  <p align="center">
  <em> Fig. 4: Light in flight video for the glass tube </em>
  </p>
</p>

We can observe light propagating through the tube, revealing its trajectory in real time. At a certain point, the indirect illumination becomes visible as it scatters and washes over the back wall, highlighting the complex light transport within the scene.

### Credits
This work was completed alongside [Trevor Seets](https://www.linkedin.com/in/trevor-seets) and [Tristan Duke](https://www.tristanduke.com/about) during Tristan’s visit. We also captured additional fascinating experiments, which Tristan will be discussing soon—be sure to check out his work [here](https://www.tristanduke.com/).


### References
[1] A. Velten et al., “Femto-photography: capturing and visualizing the propagation of light,” ACM Trans. Graph., vol. 32, no. 4, p. 44:1-44:8, Jul. 2013, doi: 10.1145/2461912.2461928, [Link](https://dl.acm.org/doi/10.1145/2461912.2461928) <br>
[2] M. O’Toole, F. Heide, D. B. Lindell, K. Zang, S. Diamond, and G. Wetzstein, “Reconstructing Transient Images From Single-Photon Sensors,” presented at the Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, 2017, pp. 1539–1547. [Link](https://openaccess.thecvf.com/content_cvpr_2017/html/OToole_Reconstructing_Transient_Images_CVPR_2017_paper.html) <br>
[3] G. Luetzenburg, A. Kroon, and A. A. Bjørk, “Evaluation of the Apple iPhone 12 Pro LiDAR for an Application in Geosciences,” Sci Rep, vol. 11, no. 1, p. 22221, Nov. 2021, doi: 10.1038/s41598-021-01763-9.
