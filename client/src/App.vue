<template>
  <div
    id="app"
    class="
      container
      d-flex
      flex-column
      justify-content-center
      align-items-center
      mt-5
    "
  >
    <!-- <h3>Willkommen bei der Service Worker Untersuchung!</h3> -->
    <h4>Hier könnte Ihre Werbung stehen!</h4>
    <img src="img/employees.jpg" class="mb-4" style="max-width: 400px" />
    <div v-if="offline" class="alert alert-danger">You are offline...</div>
    <!-- 2) Um wieviel ist das Laden das JavaScript Bundles chunk-vendors.a72f7e98.js schneller geworden? 13ms -> 4ms -> dreifache Geschwindigkeit -->
    <!-- 4) Wie lauten deine Pre-Cache Manifest Hashes von app vor und nach dem Hinzufügen der Überschrift? d10b6d263eabb3f26ad01228cf3aacf8 -> fae4721c317d025068faf0372656dfb0 -->
    <ButtonGet @get="fetchData"></ButtonGet>
    <p class="mt-3 mb-1 text-center">Get the lastest news.</p>
    <button class="btn btn-outline-success" @click="subscribe">
      Subscribe
    </button>
    <CardView
      :serverAddress="serverAddress"
      :employees="employees"
      @del="delEmployee"
    ></CardView>
  </div>
</template>

<script>
import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';
import axios from 'axios';
import { openDB } from 'idb';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
      serverAddress: process.env.VUE_APP_SERVER,
      offline: null,
      publicVapidKey:
        'BAwZYt_jEODmLm0STIcE_uc1ND_tYgSK91I4CbO6xX6GXNuNHqQCUNKmH0fFqqQVHM5JHlf-1Iwr6vyeZg88ZO8',
    };
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, {
      once: true,
    });

    window.addEventListener('online', () => {
      this.offline = false;

      const deleted = this.employees.filter((el) => el.isDeleted);
      deleted.forEach((el) => {
        this.deleteEmployee(el);
      });
    });
    window.addEventListener('offline', () => (this.offline = true));

    this.openDB();
  },
  methods: {
    async openDB() {
      this.db = await openDB('employees', 1, {
        upgrade(db) {
          db.createObjectStore('employees', { keyPath: 'id' });
        },
      });
    },

    async getStoredEmployees() {
      const temp = await this.db.getAll('employees');
      this.employees = temp.filter((el) => !el.isDeleted);
    },
    async getOnlineEmployees() {
      try {
        const { data } = await axios({
          url: `${this.serverAddress}/employees`,
        });
        this.employees = data.map((el) => ({ ...el, isDeleted: false }));

        this.db.clear('employees');
        for (let e of this.employees) {
          await this.db.put('employees', e);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchData() {
      if (this.offline) await this.getStoredEmployees();
      else await this.getOnlineEmployees();
    },

    async deleteStoredEmployee(id) {
      let employee = await this.db.get('employees', Number(id));
      employee.isDeleted = true;
      this.db.put('employees', employee);
    },
    async deleteOnlineEmployee(id) {
      try {
        await axios({
          url: `${this.serverAddress}/employees/${id}`,
          method: 'DELETE',
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmployee(id) {
      if (this.offline) await this.deleteStoredEmployee(id);
      else await this.deleteOnlineEmployee(id);
      await this.fetchData();
    },
    updateAvailable() {
      if (confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    },
    async subscribe() {
      if (!('serviceWorker' in navigator)) {
        console.log('no service worker!');
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
      });
      await axios.post('/subscribe', subscription);
      console.log('Subscription added.');
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
  },
};
</script>

<style></style>
