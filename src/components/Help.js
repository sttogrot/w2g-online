import React from 'react'
import "./css/help.css"

const Help = () => {

	return (
		<body>
			<div>
				<div class="help_title_text">
					<h1 class="help_title">So bedienen Sie unseren Webplayer:</h1>
				</div>
				<div>
					<ul class="controls">
						<p class="help_text">Damit ein synchrones Abspielen der Videos gewährleistet werden kann, besitzt jede Watchparty einen Party-Leader, welcher die Fähigkeit hat, durch Stoppen des Videos dieses zu synchronisieren</p>
						<p class="help_text">Die Syncronisation erfolgt aller 3 Sekunden weshalb nach Interaktion mit dem Videoplayer bis zu 3 Sekunden gewartet werden muss.</p>
						<h3>Allgemein</h3>
						<li class="li">
							Vollbildmodus ein/aus: F
						</li>
						<li class="li">
							Wechsel zum Kinomodus: T
						</li>
						<li class="li">
							Miniplayer aktivieren/deaktivieren: I
						</li>
						<li class="li">
							Miniplayer oder aktuelles Dialogfeld schließen: ESC
						</li>
						<li class="li">
							Stummschaltung ein/aus: M
						</li>
						<h3>Wiedergabe</h3>
						<li class="li">
						Zwischen Wiedergabe und Pause wechseln: K
						</li>
						<li class="li">
						Zehn Sekunden zurückspulen: J
						</li>
						<li class="li">
						Zehn Sekunden vorspulen: L
						</li>
						<li class="li">
						Untertitel ein-/ausschalten, wenn das Video Untertitel unterstützt: C
						</li>
						<li class="li">
						Verschiedene Text-Transparenzstufen durchgehen: O
						</li>
						<li class="li">
						Verschiedene Fenster-Transparenzstufen durchgehen: W
						</li>
					</ul>
				</div>
			</div>
		</body>
	)
}
export default Help;