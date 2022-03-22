import { Container,Row,Col } from "react-bootstrap";
import portfolio from "../assets/images/portfolio.jpg"

function About(props){

    return(

        <>
        
        {props.header}

        <div className="main">

            <section className="about-section">

                <Container>

                    <Row>

                        <Col lg={4}>

                        <div className="collection-box pink">
                            
                            <img src={portfolio} className="animate"/>

                        </div>

                        </Col>

                        <Col lg={8}>

                        <div className="dual-heading">
                            <h3>About Us</h3>
                            <h2>I am Jarlath</h2><span>and this is my story.</span>
                        </div>

                        <p className="about-p">I am from the Caribbean. I Met a guy on Tinder in April of 2019, came to West Texas in the 
                            USA in May of 2019 and married him on June 22nd 2019 (just 6 weeks after we had our first video call). 
                            I don't pee blessed water and I am not living the American dream but the hispanic nightmare. During 
                            these 3 years I realized how resilient I am and how strong I was born and raised to overcome the unforeseen. 
                            I always had a hard time saving money; like drug addicts I have no love or interest for money: if needed, I
                             would spend it: I have been rich and I have been poor, so I understand a little of both worlds. Just before 
                             the pandemic kicked in, I started acquiring small pieces of different Cryptocurrency and later I realized that 
                             this was my escape plan to little savings. Today, as if the pandemis isn't enough, it feels like the world is 
                             falling apart: war, so many people suffering, many others dying, hunger, climate change, and inflation. In the 
                             NFT world I have found means to vent my sorrow, my thoughts, my anger, my fears, my pain. Jarlath Art is more than 
                             art, it is my life in various sizes, figures, colors and shapes. Slowly I have gathered the right people that can 
                             express with their creativity what I cannot say with words. I have a team of a Community Manager (The Caribbean), 
                             a Discord Moderator (The Philippines), a Graphic Designer (Pakistan), A Creative & Graphic Designer (Ukraine)and an
                              Artist & Photographer (Austin, Texas). We started without any budget and no investor, just a little piece of a 
                              broken heart inside each one of us that together, forms a whole.
                              
                              <br/>
                              <br/>

                              20% of the profits of our collections will be used to sponsor The Jarlath Team. Our artists are highly-talented people 
                              but with no funds to develop their careers. When we succeed, I also would like to adopt a child from one of the countries 
                              that, as of now, is struggling to go through this crazy world and its madness in one piece.

                              </p>

                        </Col>
                    </Row>

                </Container>

            </section>

            <Container className="pb-5">

                <Row className="gy-5">

                    <Col lg={6}>

                        <div class="section-title">
                            <h3>The Creative & Designer - Yuliia</h3>
                        </div>

                        <p className="about-p">I am a self-taught artist. I started drawing as a child. I copied characters from my mother's books, movies 
                            and school newspapers. I couldn't get into the Art Institute because it was believed that the artist is not 
                            a profession and it is impossible to make money out of drawing. That was the stereotype, but I continued drawing.
                             As a barista, I used espresso instead of paint and created coffee pictures. On my second maternity leave with my 
                             newborn, I took digital illustration without knowing that one day I would live off that. I am from an ordinary 
                             poor family, so I could only take a drawing tablet on credit for 2 years. I drew a lot: for my friends and for 
                             my acquaintances (for FREE), then for advertising with bloggers and later, I had a successful cooperation with a 
                             Fashion Designer, an online game, and private orders. Due to Improper marketing, I received too few offers, so I 
                             had to go back to offline earnings. I was saving money for a small vacation with my family and then, the war came.
                             We are hiding from the bombing in the cellar and the money is about to be gone. This is when I had a cold thought 
                             and went online, remembered the accounts that I once created as a freelancer and started knocking at doors. I sent 
                             a lot of cover letters, applied to several job postings and after so many tries and almost feeling hopeless I received 
                             my first offer and there aren't enough words that can describe how happy and blessed I am. When the war is over, I will 
                             be able to go after my passion and show my children the world.</p>

                    </Col>

                    <Col lg={6}>

                        <div class="section-title">
                            <h3>The Discord Moderator - McPaul </h3>
                            <p className="about-p">
                                Being a Community Manager/Moderator has been my passion since I was a kid. I was a gamer: FPS games, RPG games, 
                                computer games. In every game I played when I was young, there was always a Moderator and I was curious about their 
                                job: they were just playing AND getting paid. I knew that when the right time comes, I would be a Moderator. Today, 
                                this is a blessing for me and for my family; I started working from home before the pandemic started and remote work 
                                became popular. I can do my work from anywhere and at any time. I have met great people, I have grown in the Crypto world,
                                 I have gained the trust of my NFT owners and the respect of my colleagues. Before I jumped into the Freelancing universe, 
                                 I was a Network Engineer where I was getting a fair wage but I was feeling something was missing. My wife saw this first 
                                 job and pushed me into it. I was still a full time employee and I was afraid. Then, my hard work started to show fruits and 
                                 one offer after the other knocked at my door. A lot of different experiences has brought me to this day in which after so 
                                 many losses and many other gains, I keep investing in Crypto, this is what I do for a living, to support my family. A couple 
                                 of months ago, while being a Moderator with another 3 guys, one of them got his account (that was linked to OpenSea and the 
                                 wallet and so on) hacked and +4.2MM in NFT were stolen. I also have great stories to share, but of those, everybody has one
                            </p>
                        </div>

                    </Col>

                    <Col lg={12}>

                        <div class="section-title">
                            <h3>The Artist & Photographer - Artist in Red (Austin, Texas)</h3>
                            <p className="about-p">
                            One day I decided to buy a plain white canvas and splatter paint all over it. The feeling it gave 
                            me was just this overwhelming sense of freedom and complete happiness. To me, art is a feeling. It 
                            feeds my soul. My stylistic approach to art can be described as playful yet sophisticated. I created 
                            artwork to share with the world. The world becomes less fixed and the color is turned up when I create. 
                            I am an abstract splash artist based in Austin, Texas. My name is Madison Auerbach and my artist name is 
                            Artist in Red. I found home though art and I am excited to see where my journey takes me
                            </p>
                        </div>

                        </Col>

                </Row>


            </Container>

        </div>

        {props.footer}

        </>

    )

}

export default About;