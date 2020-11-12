DROP TABLE IF EXISTS weekly_nfl_games, all_events_all_weeks, all_plays;

CREATE TABLE weekly_nfl_games (
	gameId INT PRIMARY KEY,
	WEEK VARCHAR,
	WINNER TEXT,
	LOSER TEXT,
	POINTS_WINNER INT,
	POINTS_LOSER INT,
	YARDS_WON INT,
	YARDS_LOST INT,                
	PASSES INT,                     
	COMPLETE INT,                   
	INCOMPLETE INT,                
	INTERCEPTED INT,                
	SACK INT,                       
	TRADITIONAL INT,                
	DESIGNED_ROLLOUT_RIGHT INT,     
	DESIGNED_ROLLOUT_LEFT INT,      
	SCRAMBLE INT,                   
	SCRAMBLE_ROLLOUT_RIGHT INT,     
	SCRAMBLE_ROLLOUT_LEFT INT,      
	UNKNOWN INT,                    
	I_FORM INT,                     
	EMPTY INT,                      
	SHOTGUN INT,                    
	SINGLEBACK INT,                 
	JUMBO INT,                      
	PISTOL INT
);
	
	
	
	
	
	
	
	
	
	
	
	
	