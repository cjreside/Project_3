DROP TABLE IF EXISTS all_events_all_weeks, all_plays, weekly_nfl_games;

-- Create Tables
CREATE TABLE all_events_all_weeks (
    time VARCHAR,
    x FLOAT,
    y FLOAT,
    s INT,
    a INT,
    dis INT,
	o INT,
	dir INT,
	event TEXT,
	nflId INT,
	displayName TEXT,
	jerseyNumber INT,
	position TEXT,
	frameId INT,
	team TEXT,
	gameId INT,
	playId INT,
	playDirection TEXT,
	route TEXT
);

CREATE TABLE all_plays (
    gameId INT,
	playId INT,
	playDescription VARCHAR,
	quarter INT,
	down INT,
	yardsToGo INT,
	possessionTeam TEXT,
	playType VARCHAR,
	yardlineSide TEXT,
	yardlineNumber INT,
	offenseFormation TEXT,
	personnelO VARCHAR,
	defendersinTheBox INT,
	numberofPassRushers INT,
	personnelID VARCHAR,
	typeDropback VARCHAR,
	preSnapVisitorScore INT,
	preSnapHomeScore INT,
	gameClock VARCHAR,
	absoluteYardlineNumber INT,
	penaltyCodes VARCHAR,
	penaltyJerseyNumber VARCHAR,
	passResult TEXT,
	offensePlayResult INT,
	playResult INT,
	epa INT
);

CREATE TABLE weekly_nfl_games (
	gameId INT,
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
	
	
	
	
	
	
	
	
	
	
	
	
	