import { computed, watch, ref } from "@vue/composition-api";

export function useSpeechRecognition(state) {
    const transcript = ref(null);
    const confidence = ref(0);
    const isRecording = ref(false);
    const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.onstart = function () {
        console.log("start");
    };

    recognition.onspeechend = function () {
        isRecording.value = false;
    }

    recognition.onresult = function (event) {
        transcript.value = event.results[0][0].transcript;
        confidence.value = event.results[0][0].confidence;
    };

    
    recognition.onend = () => {
        isRecording.value = false;
    };

    watch(state, currentState => {
        if (currentState) {
            isRecording.value = true;
            recognition.start();
        } else {
            isRecording.value = false
            recognition.stop();
        }
    });

    return {
        transcript: computed(() => transcript.value),
        confidence: computed(() => confidence.value),
        isRecording: computed(() => isRecording.value)
    }
}